/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

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

export type CreateUserProfileInput = {
  id?: string | null,
  userId?: string | null,
  email?: string | null,
  firstName?: string | null,
  lastName?: string | null,
  phoneNumber?: string | null,
  address?: AddressInput | null,
  avatar?: string | null,
  bio?: string | null,
  _version?: number | null,
};

export type AddressInput = {
  street?: string | null,
  city?: string | null,
  stateProvince?: string | null,
  zipCode?: string | null,
  country?: string | null,
};

export type ModelUserProfileConditionInput = {
  userId?: ModelStringInput | null,
  email?: ModelStringInput | null,
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  phoneNumber?: ModelStringInput | null,
  avatar?: ModelStringInput | null,
  bio?: ModelStringInput | null,
  and?: Array< ModelUserProfileConditionInput | null > | null,
  or?: Array< ModelUserProfileConditionInput | null > | null,
  not?: ModelUserProfileConditionInput | null,
  _deleted?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelStringInput | null,
};

export type UserProfile = {
  __typename: "UserProfile",
  id: string,
  userId?: string | null,
  email?: string | null,
  firstName?: string | null,
  lastName?: string | null,
  phoneNumber?: string | null,
  address?: Address | null,
  avatar?: string | null,
  bio?: string | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  owner?: string | null,
};

export type Address = {
  __typename: "Address",
  street?: string | null,
  city?: string | null,
  stateProvince?: string | null,
  zipCode?: string | null,
  country?: string | null,
};

export type UpdateUserProfileInput = {
  id: string,
  userId?: string | null,
  email?: string | null,
  firstName?: string | null,
  lastName?: string | null,
  phoneNumber?: string | null,
  address?: AddressInput | null,
  avatar?: string | null,
  bio?: string | null,
  _version?: number | null,
};

export type DeleteUserProfileInput = {
  id: string,
  _version?: number | null,
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

export type ModelUserProfileFilterInput = {
  id?: ModelIDInput | null,
  userId?: ModelStringInput | null,
  email?: ModelStringInput | null,
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  phoneNumber?: ModelStringInput | null,
  avatar?: ModelStringInput | null,
  bio?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelUserProfileFilterInput | null > | null,
  or?: Array< ModelUserProfileFilterInput | null > | null,
  not?: ModelUserProfileFilterInput | null,
  _deleted?: ModelBooleanInput | null,
  owner?: ModelStringInput | null,
};

export type ModelUserProfileConnection = {
  __typename: "ModelUserProfileConnection",
  items:  Array<UserProfile | null >,
  nextToken?: string | null,
  startedAt?: number | null,
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

export type ModelSubscriptionUserProfileFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  userId?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  firstName?: ModelSubscriptionStringInput | null,
  lastName?: ModelSubscriptionStringInput | null,
  phoneNumber?: ModelSubscriptionStringInput | null,
  avatar?: ModelSubscriptionStringInput | null,
  bio?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserProfileFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserProfileFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
  owner?: ModelStringInput | null,
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

export type CreateUserProfileMutationVariables = {
  input: CreateUserProfileInput,
  condition?: ModelUserProfileConditionInput | null,
};

export type CreateUserProfileMutation = {
  createUserProfile?:  {
    __typename: "UserProfile",
    id: string,
    userId?: string | null,
    email?: string | null,
    firstName?: string | null,
    lastName?: string | null,
    phoneNumber?: string | null,
    address?:  {
      __typename: "Address",
      street?: string | null,
      city?: string | null,
      stateProvince?: string | null,
      zipCode?: string | null,
      country?: string | null,
    } | null,
    avatar?: string | null,
    bio?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type UpdateUserProfileMutationVariables = {
  input: UpdateUserProfileInput,
  condition?: ModelUserProfileConditionInput | null,
};

export type UpdateUserProfileMutation = {
  updateUserProfile?:  {
    __typename: "UserProfile",
    id: string,
    userId?: string | null,
    email?: string | null,
    firstName?: string | null,
    lastName?: string | null,
    phoneNumber?: string | null,
    address?:  {
      __typename: "Address",
      street?: string | null,
      city?: string | null,
      stateProvince?: string | null,
      zipCode?: string | null,
      country?: string | null,
    } | null,
    avatar?: string | null,
    bio?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type DeleteUserProfileMutationVariables = {
  input: DeleteUserProfileInput,
  condition?: ModelUserProfileConditionInput | null,
};

export type DeleteUserProfileMutation = {
  deleteUserProfile?:  {
    __typename: "UserProfile",
    id: string,
    userId?: string | null,
    email?: string | null,
    firstName?: string | null,
    lastName?: string | null,
    phoneNumber?: string | null,
    address?:  {
      __typename: "Address",
      street?: string | null,
      city?: string | null,
      stateProvince?: string | null,
      zipCode?: string | null,
      country?: string | null,
    } | null,
    avatar?: string | null,
    bio?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
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

export type GetUserProfileQueryVariables = {
  id: string,
};

export type GetUserProfileQuery = {
  getUserProfile?:  {
    __typename: "UserProfile",
    id: string,
    userId?: string | null,
    email?: string | null,
    firstName?: string | null,
    lastName?: string | null,
    phoneNumber?: string | null,
    address?:  {
      __typename: "Address",
      street?: string | null,
      city?: string | null,
      stateProvince?: string | null,
      zipCode?: string | null,
      country?: string | null,
    } | null,
    avatar?: string | null,
    bio?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type ListUserProfilesQueryVariables = {
  filter?: ModelUserProfileFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUserProfilesQuery = {
  listUserProfiles?:  {
    __typename: "ModelUserProfileConnection",
    items:  Array< {
      __typename: "UserProfile",
      id: string,
      userId?: string | null,
      email?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      phoneNumber?: string | null,
      avatar?: string | null,
      bio?: string | null,
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

export type SyncUserProfilesQueryVariables = {
  filter?: ModelUserProfileFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncUserProfilesQuery = {
  syncUserProfiles?:  {
    __typename: "ModelUserProfileConnection",
    items:  Array< {
      __typename: "UserProfile",
      id: string,
      userId?: string | null,
      email?: string | null,
      firstName?: string | null,
      lastName?: string | null,
      phoneNumber?: string | null,
      avatar?: string | null,
      bio?: string | null,
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

export type OnCreateArtistSubscriptionVariables = {
  filter?: ModelSubscriptionArtistFilterInput | null,
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
  } | null,
};

export type OnUpdateArtistSubscriptionVariables = {
  filter?: ModelSubscriptionArtistFilterInput | null,
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
  } | null,
};

export type OnDeleteArtistSubscriptionVariables = {
  filter?: ModelSubscriptionArtistFilterInput | null,
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

export type OnCreateUserProfileSubscriptionVariables = {
  filter?: ModelSubscriptionUserProfileFilterInput | null,
  owner?: string | null,
};

export type OnCreateUserProfileSubscription = {
  onCreateUserProfile?:  {
    __typename: "UserProfile",
    id: string,
    userId?: string | null,
    email?: string | null,
    firstName?: string | null,
    lastName?: string | null,
    phoneNumber?: string | null,
    address?:  {
      __typename: "Address",
      street?: string | null,
      city?: string | null,
      stateProvince?: string | null,
      zipCode?: string | null,
      country?: string | null,
    } | null,
    avatar?: string | null,
    bio?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type OnUpdateUserProfileSubscriptionVariables = {
  filter?: ModelSubscriptionUserProfileFilterInput | null,
  owner?: string | null,
};

export type OnUpdateUserProfileSubscription = {
  onUpdateUserProfile?:  {
    __typename: "UserProfile",
    id: string,
    userId?: string | null,
    email?: string | null,
    firstName?: string | null,
    lastName?: string | null,
    phoneNumber?: string | null,
    address?:  {
      __typename: "Address",
      street?: string | null,
      city?: string | null,
      stateProvince?: string | null,
      zipCode?: string | null,
      country?: string | null,
    } | null,
    avatar?: string | null,
    bio?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type OnDeleteUserProfileSubscriptionVariables = {
  filter?: ModelSubscriptionUserProfileFilterInput | null,
  owner?: string | null,
};

export type OnDeleteUserProfileSubscription = {
  onDeleteUserProfile?:  {
    __typename: "UserProfile",
    id: string,
    userId?: string | null,
    email?: string | null,
    firstName?: string | null,
    lastName?: string | null,
    phoneNumber?: string | null,
    address?:  {
      __typename: "Address",
      street?: string | null,
      city?: string | null,
      stateProvince?: string | null,
      zipCode?: string | null,
      country?: string | null,
    } | null,
    avatar?: string | null,
    bio?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};
