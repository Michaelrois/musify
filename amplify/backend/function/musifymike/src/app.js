const express = require('express');
const bodyParser = require('body-parser');
const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware');
const multer = require('multer');
const AWS = require('aws-sdk');

const s3 = new AWS.S3();

// Multer setup to store files in memory
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(awsServerlessExpressMiddleware.eventContext());

// Enable CORS for all methods
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});

// Upload file route
app.post('/upload', upload.single('file'), (req, res) => {
  const file = req.file;
  const username = req.body.username;

  const base64File = file.buffer.toString('base64');

  if (!file || !username) {
    return res.status(400).send('No file or username provided.');
  }

  const uploadParams = {
    Bucket: 'trymike',
    Key: `${username}/${file.originalname}`,
    Body: Buffer.from(base64File, 'base64'),
    ContentType: file.mimetype,
  };

  s3.upload(uploadParams, (err, data) => {
    if (err) {
      console.error('Error uploading file:', err);
      return res.status(500).send('Error uploading file.');
    }

    res.send(`File uploaded successfully. ${data.Location}`);
  });
});

app.get('/files/:username', async (req, res) => {
  const username = req.params.username;
  const params = {
    Bucket: 'trymike',
    Prefix: `${username}/`
  };

  try {
    const data = await s3.listObjectsV2(params).promise();
    const files = data.Contents.map(file => ({
      Key: file.Key,
      LastModified: file.LastModified,
      Size: file.Size,
      Url: s3.getSignedUrl('getObject', { Bucket: 'trymike', Key: file.Key, Expires: 60 })
    }));

    res.json(files);

  } catch (err) {
    console.error('Error listing files:', err);
    res.status(500).send('Error listing files.');
  }
});

app.listen(3003, function() {
  console.log("App started");
});

module.exports = app;