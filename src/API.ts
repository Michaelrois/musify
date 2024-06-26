/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateTodoInput = {
  id?: string | null,
  name: string,
  description?: string | null,
  _version?: number | null,
};

export type ModelTodoConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelTodoConditionInput | null > | null,
  or?: Array< ModelTodoConditionInput | null > | null,
  not?: ModelTodoConditionInput | null,
  _deleted?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelStringInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Todo = {
  __typename: "Todo",
  id: string,
  name: string,
  description?: string | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  owner?: string | null,
};

export type UpdateTodoInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  _version?: number | null,
};

export type DeleteTodoInput = {
  id: string,
  _version?: number | null,
};

export type CreateArtistInput = {
  id?: string | null,
  name: string,
  label?: string | null,
  date?: string | null,
  description?: string | null,
  personalPageLink?: string | null,
  image: string,
  tooltipText?: string | null,
  _version?: number | null,
};

export type ModelArtistConditionInput = {
  name?: ModelStringInput | null,
  label?: ModelStringInput | null,
  date?: ModelStringInput | null,
  description?: ModelStringInput | null,
  personalPageLink?: ModelStringInput | null,
  image?: ModelStringInput | null,
  tooltipText?: ModelStringInput | null,
  and?: Array< ModelArtistConditionInput | null > | null,
  or?: Array< ModelArtistConditionInput | null > | null,
  not?: ModelArtistConditionInput | null,
  _deleted?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelStringInput | null,
};

export type Artist = {
  __typename: "Artist",
  id: string,
  name: string,
  label?: string | null,
  date?: string | null,
  description?: string | null,
  personalPageLink?: string | null,
  image: string,
  tooltipText?: string | null,
  songs?: ModelSongConnection | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  owner?: string | null,
};

export type ModelSongConnection = {
  __typename: "ModelSongConnection",
  items:  Array<Song | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type Song = {
  __typename: "Song",
  id: string,
  artist?: Artist | null,
  title: string,
  duration: number,
  album: string,
  releaseDate: string,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  artistSongsId?: string | null,
  owner?: string | null,
};

export type UpdateArtistInput = {
  id: string,
  name?: string | null,
  label?: string | null,
  date?: string | null,
  description?: string | null,
  personalPageLink?: string | null,
  image?: string | null,
  tooltipText?: string | null,
  _version?: number | null,
};

export type DeleteArtistInput = {
  id: string,
  _version?: number | null,
};

export type CreateSongInput = {
  id?: string | null,
  title: string,
  duration: number,
  album: string,
  releaseDate: string,
  _version?: number | null,
  artistSongsId?: string | null,
};

export type ModelSongConditionInput = {
  title?: ModelStringInput | null,
  duration?: ModelIntInput | null,
  album?: ModelStringInput | null,
  releaseDate?: ModelStringInput | null,
  and?: Array< ModelSongConditionInput | null > | null,
  or?: Array< ModelSongConditionInput | null > | null,
  not?: ModelSongConditionInput | null,
  _deleted?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  artistSongsId?: ModelIDInput | null,
  owner?: ModelStringInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateSongInput = {
  id: string,
  title?: string | null,
  duration?: number | null,
  album?: string | null,
  releaseDate?: string | null,
  _version?: number | null,
  artistSongsId?: string | null,
};

export type DeleteSongInput = {
  id: string,
  _version?: number | null,
};

export type ModelTodoFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelTodoFilterInput | null > | null,
  or?: Array< ModelTodoFilterInput | null > | null,
  not?: ModelTodoFilterInput | null,
  _deleted?: ModelBooleanInput | null,
  owner?: ModelStringInput | null,
};

export type ModelTodoConnection = {
  __typename: "ModelTodoConnection",
  items:  Array<Todo | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelArtistFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  label?: ModelStringInput | null,
  date?: ModelStringInput | null,
  description?: ModelStringInput | null,
  personalPageLink?: ModelStringInput | null,
  image?: ModelStringInput | null,
  tooltipText?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelArtistFilterInput | null > | null,
  or?: Array< ModelArtistFilterInput | null > | null,
  not?: ModelArtistFilterInput | null,
  _deleted?: ModelBooleanInput | null,
  owner?: ModelStringInput | null,
};

export type ModelArtistConnection = {
  __typename: "ModelArtistConnection",
  items:  Array<Artist | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelSongFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  duration?: ModelIntInput | null,
  album?: ModelStringInput | null,
  releaseDate?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelSongFilterInput | null > | null,
  or?: Array< ModelSongFilterInput | null > | null,
  not?: ModelSongFilterInput | null,
  _deleted?: ModelBooleanInput | null,
  artistSongsId?: ModelIDInput | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionTodoFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionTodoFilterInput | null > | null,
  or?: Array< ModelSubscriptionTodoFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionArtistFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  label?: ModelSubscriptionStringInput | null,
  date?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  personalPageLink?: ModelSubscriptionStringInput | null,
  image?: ModelSubscriptionStringInput | null,
  tooltipText?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionArtistFilterInput | null > | null,
  or?: Array< ModelSubscriptionArtistFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
  artistSongsId?: ModelSubscriptionIDInput | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionSongFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
  duration?: ModelSubscriptionIntInput | null,
  album?: ModelSubscriptionStringInput | null,
  releaseDate?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionSongFilterInput | null > | null,
  or?: Array< ModelSubscriptionSongFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type CreateTodoMutationVariables = {
  input: CreateTodoInput,
  condition?: ModelTodoConditionInput | null,
};

export type CreateTodoMutation = {
  createTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type UpdateTodoMutationVariables = {
  input: UpdateTodoInput,
  condition?: ModelTodoConditionInput | null,
};

export type UpdateTodoMutation = {
  updateTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type DeleteTodoMutationVariables = {
  input: DeleteTodoInput,
  condition?: ModelTodoConditionInput | null,
};

export type DeleteTodoMutation = {
  deleteTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type CreateArtistMutationVariables = {
  input: CreateArtistInput,
  condition?: ModelArtistConditionInput | null,
};

export type CreateArtistMutation = {
  createArtist?:  {
    __typename: "Artist",
    id: string,
    name: string,
    label?: string | null,
    date?: string | null,
    description?: string | null,
    personalPageLink?: string | null,
    image: string,
    tooltipText?: string | null,
    songs?:  {
      __typename: "ModelSongConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type UpdateArtistMutationVariables = {
  input: UpdateArtistInput,
  condition?: ModelArtistConditionInput | null,
};

export type UpdateArtistMutation = {
  updateArtist?:  {
    __typename: "Artist",
    id: string,
    name: string,
    label?: string | null,
    date?: string | null,
    description?: string | null,
    personalPageLink?: string | null,
    image: string,
    tooltipText?: string | null,
    songs?:  {
      __typename: "ModelSongConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type DeleteArtistMutationVariables = {
  input: DeleteArtistInput,
  condition?: ModelArtistConditionInput | null,
};

export type DeleteArtistMutation = {
  deleteArtist?:  {
    __typename: "Artist",
    id: string,
    name: string,
    label?: string | null,
    date?: string | null,
    description?: string | null,
    personalPageLink?: string | null,
    image: string,
    tooltipText?: string | null,
    songs?:  {
      __typename: "ModelSongConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type CreateSongMutationVariables = {
  input: CreateSongInput,
  condition?: ModelSongConditionInput | null,
};

export type CreateSongMutation = {
  createSong?:  {
    __typename: "Song",
    id: string,
    artist?:  {
      __typename: "Artist",
      id: string,
      name: string,
      label?: string | null,
      date?: string | null,
      description?: string | null,
      personalPageLink?: string | null,
      image: string,
      tooltipText?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null,
    title: string,
    duration: number,
    album: string,
    releaseDate: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    artistSongsId?: string | null,
    owner?: string | null,
  } | null,
};

export type UpdateSongMutationVariables = {
  input: UpdateSongInput,
  condition?: ModelSongConditionInput | null,
};

export type UpdateSongMutation = {
  updateSong?:  {
    __typename: "Song",
    id: string,
    artist?:  {
      __typename: "Artist",
      id: string,
      name: string,
      label?: string | null,
      date?: string | null,
      description?: string | null,
      personalPageLink?: string | null,
      image: string,
      tooltipText?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null,
    title: string,
    duration: number,
    album: string,
    releaseDate: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    artistSongsId?: string | null,
    owner?: string | null,
  } | null,
};

export type DeleteSongMutationVariables = {
  input: DeleteSongInput,
  condition?: ModelSongConditionInput | null,
};

export type DeleteSongMutation = {
  deleteSong?:  {
    __typename: "Song",
    id: string,
    artist?:  {
      __typename: "Artist",
      id: string,
      name: string,
      label?: string | null,
      date?: string | null,
      description?: string | null,
      personalPageLink?: string | null,
      image: string,
      tooltipText?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null,
    title: string,
    duration: number,
    album: string,
    releaseDate: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    artistSongsId?: string | null,
    owner?: string | null,
  } | null,
};

export type GetTodoQueryVariables = {
  id: string,
};

export type GetTodoQuery = {
  getTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type ListTodosQueryVariables = {
  filter?: ModelTodoFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTodosQuery = {
  listTodos?:  {
    __typename: "ModelTodoConnection",
    items:  Array< {
      __typename: "Todo",
      id: string,
      name: string,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncTodosQueryVariables = {
  filter?: ModelTodoFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncTodosQuery = {
  syncTodos?:  {
    __typename: "ModelTodoConnection",
    items:  Array< {
      __typename: "Todo",
      id: string,
      name: string,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetArtistQueryVariables = {
  id: string,
};

export type GetArtistQuery = {
  getArtist?:  {
    __typename: "Artist",
    id: string,
    name: string,
    label?: string | null,
    date?: string | null,
    description?: string | null,
    personalPageLink?: string | null,
    image: string,
    tooltipText?: string | null,
    songs?:  {
      __typename: "ModelSongConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type ListArtistsQueryVariables = {
  filter?: ModelArtistFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListArtistsQuery = {
  listArtists?:  {
    __typename: "ModelArtistConnection",
    items:  Array< {
      __typename: "Artist",
      id: string,
      name: string,
      label?: string | null,
      date?: string | null,
      description?: string | null,
      personalPageLink?: string | null,
      image: string,
      tooltipText?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncArtistsQueryVariables = {
  filter?: ModelArtistFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncArtistsQuery = {
  syncArtists?:  {
    __typename: "ModelArtistConnection",
    items:  Array< {
      __typename: "Artist",
      id: string,
      name: string,
      label?: string | null,
      date?: string | null,
      description?: string | null,
      personalPageLink?: string | null,
      image: string,
      tooltipText?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetSongQueryVariables = {
  id: string,
};

export type GetSongQuery = {
  getSong?:  {
    __typename: "Song",
    id: string,
    artist?:  {
      __typename: "Artist",
      id: string,
      name: string,
      label?: string | null,
      date?: string | null,
      description?: string | null,
      personalPageLink?: string | null,
      image: string,
      tooltipText?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null,
    title: string,
    duration: number,
    album: string,
    releaseDate: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    artistSongsId?: string | null,
    owner?: string | null,
  } | null,
};

export type ListSongsQueryVariables = {
  filter?: ModelSongFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSongsQuery = {
  listSongs?:  {
    __typename: "ModelSongConnection",
    items:  Array< {
      __typename: "Song",
      id: string,
      title: string,
      duration: number,
      album: string,
      releaseDate: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      artistSongsId?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncSongsQueryVariables = {
  filter?: ModelSongFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncSongsQuery = {
  syncSongs?:  {
    __typename: "ModelSongConnection",
    items:  Array< {
      __typename: "Song",
      id: string,
      title: string,
      duration: number,
      album: string,
      releaseDate: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      artistSongsId?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type OnCreateTodoSubscriptionVariables = {
  filter?: ModelSubscriptionTodoFilterInput | null,
  owner?: string | null,
};

export type OnCreateTodoSubscription = {
  onCreateTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type OnUpdateTodoSubscriptionVariables = {
  filter?: ModelSubscriptionTodoFilterInput | null,
  owner?: string | null,
};

export type OnUpdateTodoSubscription = {
  onUpdateTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type OnDeleteTodoSubscriptionVariables = {
  filter?: ModelSubscriptionTodoFilterInput | null,
  owner?: string | null,
};

export type OnDeleteTodoSubscription = {
  onDeleteTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type OnCreateArtistSubscriptionVariables = {
  filter?: ModelSubscriptionArtistFilterInput | null,
  owner?: string | null,
};

export type OnCreateArtistSubscription = {
  onCreateArtist?:  {
    __typename: "Artist",
    id: string,
    name: string,
    label?: string | null,
    date?: string | null,
    description?: string | null,
    personalPageLink?: string | null,
    image: string,
    tooltipText?: string | null,
    songs?:  {
      __typename: "ModelSongConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type OnUpdateArtistSubscriptionVariables = {
  filter?: ModelSubscriptionArtistFilterInput | null,
  owner?: string | null,
};

export type OnUpdateArtistSubscription = {
  onUpdateArtist?:  {
    __typename: "Artist",
    id: string,
    name: string,
    label?: string | null,
    date?: string | null,
    description?: string | null,
    personalPageLink?: string | null,
    image: string,
    tooltipText?: string | null,
    songs?:  {
      __typename: "ModelSongConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type OnDeleteArtistSubscriptionVariables = {
  filter?: ModelSubscriptionArtistFilterInput | null,
  owner?: string | null,
};

export type OnDeleteArtistSubscription = {
  onDeleteArtist?:  {
    __typename: "Artist",
    id: string,
    name: string,
    label?: string | null,
    date?: string | null,
    description?: string | null,
    personalPageLink?: string | null,
    image: string,
    tooltipText?: string | null,
    songs?:  {
      __typename: "ModelSongConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type OnCreateSongSubscriptionVariables = {
  filter?: ModelSubscriptionSongFilterInput | null,
  owner?: string | null,
};

export type OnCreateSongSubscription = {
  onCreateSong?:  {
    __typename: "Song",
    id: string,
    artist?:  {
      __typename: "Artist",
      id: string,
      name: string,
      label?: string | null,
      date?: string | null,
      description?: string | null,
      personalPageLink?: string | null,
      image: string,
      tooltipText?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null,
    title: string,
    duration: number,
    album: string,
    releaseDate: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    artistSongsId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnUpdateSongSubscriptionVariables = {
  filter?: ModelSubscriptionSongFilterInput | null,
  owner?: string | null,
};

export type OnUpdateSongSubscription = {
  onUpdateSong?:  {
    __typename: "Song",
    id: string,
    artist?:  {
      __typename: "Artist",
      id: string,
      name: string,
      label?: string | null,
      date?: string | null,
      description?: string | null,
      personalPageLink?: string | null,
      image: string,
      tooltipText?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null,
    title: string,
    duration: number,
    album: string,
    releaseDate: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    artistSongsId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnDeleteSongSubscriptionVariables = {
  filter?: ModelSubscriptionSongFilterInput | null,
  owner?: string | null,
};

export type OnDeleteSongSubscription = {
  onDeleteSong?:  {
    __typename: "Song",
    id: string,
    artist?:  {
      __typename: "Artist",
      id: string,
      name: string,
      label?: string | null,
      date?: string | null,
      description?: string | null,
      personalPageLink?: string | null,
      image: string,
      tooltipText?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null,
    title: string,
    duration: number,
    album: string,
    releaseDate: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    artistSongsId?: string | null,
    owner?: string | null,
  } | null,
};
