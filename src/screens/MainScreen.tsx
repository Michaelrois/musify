import {useEffect, useRef, useState} from 'react';
import {Box, Modal, Typography} from "@mui/material";
import CloseTwoToneIcon from '@mui/icons-material/CloseTwoTone';
import styled from "styled-components";
import {ListArtistEntry} from "../components/ListArtistEntry";
import {Artist} from "../models";
import {useArtistContext} from "../context/ArtistContext";
import {getCurrentUser} from "aws-amplify/auth";
import {Amplify} from "aws-amplify";
import awsConfig from "../amplifyconfiguration.json";
import FileUpload from "../components/FileUpload";
import NavigationBar from "../components/NavigationBar";
import AudioComponent from "../components/AudioComponent";
import axios from "axios";

Amplify.configure(awsConfig)

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '50%',
    height: 'calc(auto)',
    bgcolor: 'background.paper',
    border: '6px double darkred',
    borderRadius: '10px',
    boxShadow: '5px 7px 10px black',
    p: 4,
};

const closeIconStyle = {
    position: "relative",
    top: "-20px",
    right: "-99.5%",
    cursor: "pointer",
    color: "red",
    border: "2px black solid",
    borderRadius: "5px"
}

const modalTitleStyle = {
    position: "relative",
    textAlign: "center",
    top: "-25px",
    color: "darkred",
    fontSize: "3rem",
    fontWeight: "bold",
    textShadow: "2px 3px 5px black",
    textDecoration: "underline"
}

const MainTitle = styled.h1`
    font-size: 6rem;
    padding-bottom: 4rem;
    text-align: center;
    color: darkred;
    text-shadow: 3px 4px 5px black;
`;

const ListArtists = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const ListItem = styled.li`
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: bold;
  text-decoration: underline;
  list-style-type: none;
  color: darkred;

  &:hover {
    color: #2d10e6;
  }
`;

interface FileData {
    Key: string;
    Size: number;
    LastModified: string;
    Url: string;
}

export const MainScreen = () => {
    const {artists} = useArtistContext();
    const [open, setOpen] = useState(false);
    const [selectedArtist, setSelectedArtist] = useState<Artist | null>(null);
    const [userId, setUserId] = useState<string | null>(null);
    const [fileData, setFileData] = useState<FileData[] | null>(null);
    const audioRef = useRef<HTMLAudioElement>(null);

    useEffect(() => {
        getCurrentUser().then(({userId}) => {
            setUserId(userId);
        })
    }, []);

    useEffect(() => {
        axios.get('https://69xikljut5.execute-api.us-east-1.amazonaws.com/dev/files/mike').then(response => {
            console.log(response.data);
            setFileData(response.data);
        }).catch(error => {
            console.error('Error fetching files:', error);
        })
    }, []);


    const handleOpen = (artist: Artist) => {
        setSelectedArtist(artist);
        setOpen(true)
    };
    const handleClose = () => setOpen(false);

    const changeSong = (url: string) => {
        if (audioRef.current) {
            audioRef.current.src = url;
            audioRef.current.play();
        }
    };

    return (
    <div>
    <NavigationBar />
        <MainTitle>Musify - Artists List</MainTitle>
        <ListArtists>
            {artists.map((artist: Artist) => (
                <ListArtistEntry
                    key={artist.id}
                    id={artist.id.toString()}
                    handleOpenModal={() => handleOpen(artist)}
                    name={artist.name}
                    image={artist.image}
                    tooltipText={artist.tooltipText}
                />
            ))}
        </ListArtists>
        <Modal
            open={open}
            /*onClose={handleClose}*/
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <CloseTwoToneIcon
                    onClick={handleClose}
                    sx={closeIconStyle}
                />
                <Typography
                    id="modal-modal-title"
                    variant="h5"
                    component="h2"
                    sx={modalTitleStyle}
                >
                    {selectedArtist?.name}
                </Typography>
                <Typography id="modal-modal-description" sx={{
                    mt: 2,
                    padding: '1rem 0rem 1rem 1rem',
                    fontSize: '1.2rem',
                    fontWeight: 'bold',
                }}>
                    {selectedArtist?.description}
                </Typography>
                {selectedArtist &&
                <ul>
                    {fileData
                        ?.filter((file: FileData) => file.Key.includes(selectedArtist.name))
                        .map((file: FileData) => {
                            const fileName = file.Key.split('/').pop(); // Extract file name

                            return (
                                <ListItem
                                    key={file.Key}
                                    onClick={() => changeSong(file.Url)}
                                    style={{width: '45%', padding: '2px 0px 5px 0px', cursor: 'pointer'}}
                                >
                                    {fileName}
                                </ListItem>
                            );
                        })}
                </ul>}
                <AudioComponent audioRef={audioRef} />
                <FileUpload 
                    username={'mike'} artist={artists[0]} selectedArtist={selectedArtist?.name}/>
            </Box>
        </Modal>
    </div>
    );
}