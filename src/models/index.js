// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Artist, Song } = initSchema(schema);

export {
  Artist,
  Song
};