// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Todo, Artist, Song } = initSchema(schema);

export {
  Todo,
  Artist,
  Song
};