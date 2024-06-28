/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getArtist = /* GraphQL */ `query GetArtist($id: ID!) {
  getArtist(id: $id) {
    id
    name
    label
    date
    description
    personalPageLink
    image
    tooltipText
    songs {
      nextToken
      startedAt
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetArtistQueryVariables, APITypes.GetArtistQuery>;
export const listArtists = /* GraphQL */ `query ListArtists(
  $filter: ModelArtistFilterInput
  $limit: Int
  $nextToken: String
) {
  listArtists(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      label
      date
      description
      personalPageLink
      image
      tooltipText
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListArtistsQueryVariables,
  APITypes.ListArtistsQuery
>;
export const syncArtists = /* GraphQL */ `query SyncArtists(
  $filter: ModelArtistFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncArtists(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      name
      label
      date
      description
      personalPageLink
      image
      tooltipText
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncArtistsQueryVariables,
  APITypes.SyncArtistsQuery
>;
export const getSong = /* GraphQL */ `query GetSong($id: ID!) {
  getSong(id: $id) {
    id
    artist {
      id
      name
      label
      date
      description
      personalPageLink
      image
      tooltipText
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    title
    duration
    album
    releaseDate
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    artistSongsId
    owner
    __typename
  }
}
` as GeneratedQuery<APITypes.GetSongQueryVariables, APITypes.GetSongQuery>;
export const listSongs = /* GraphQL */ `query ListSongs(
  $filter: ModelSongFilterInput
  $limit: Int
  $nextToken: String
) {
  listSongs(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
      duration
      album
      releaseDate
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      artistSongsId
      owner
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.ListSongsQueryVariables, APITypes.ListSongsQuery>;
export const syncSongs = /* GraphQL */ `query SyncSongs(
  $filter: ModelSongFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncSongs(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      title
      duration
      album
      releaseDate
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      artistSongsId
      owner
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.SyncSongsQueryVariables, APITypes.SyncSongsQuery>;
export const getUserProfile = /* GraphQL */ `query GetUserProfile($id: ID!) {
  getUserProfile(id: $id) {
    id
    userId
    email
    firstName
    lastName
    phoneNumber
    address {
      street
      city
      stateProvince
      zipCode
      country
      __typename
    }
    avatar
    bio
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    owner
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetUserProfileQueryVariables,
  APITypes.GetUserProfileQuery
>;
export const listUserProfiles = /* GraphQL */ `query ListUserProfiles(
  $filter: ModelUserProfileFilterInput
  $limit: Int
  $nextToken: String
) {
  listUserProfiles(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      userId
      email
      firstName
      lastName
      phoneNumber
      avatar
      bio
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListUserProfilesQueryVariables,
  APITypes.ListUserProfilesQuery
>;
export const syncUserProfiles = /* GraphQL */ `query SyncUserProfiles(
  $filter: ModelUserProfileFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncUserProfiles(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      userId
      email
      firstName
      lastName
      phoneNumber
      avatar
      bio
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncUserProfilesQueryVariables,
  APITypes.SyncUserProfilesQuery
>;
