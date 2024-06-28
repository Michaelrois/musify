/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateArtist = /* GraphQL */ `subscription OnCreateArtist($filter: ModelSubscriptionArtistFilterInput) {
  onCreateArtist(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateArtistSubscriptionVariables,
  APITypes.OnCreateArtistSubscription
>;
export const onUpdateArtist = /* GraphQL */ `subscription OnUpdateArtist($filter: ModelSubscriptionArtistFilterInput) {
  onUpdateArtist(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateArtistSubscriptionVariables,
  APITypes.OnUpdateArtistSubscription
>;
export const onDeleteArtist = /* GraphQL */ `subscription OnDeleteArtist($filter: ModelSubscriptionArtistFilterInput) {
  onDeleteArtist(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteArtistSubscriptionVariables,
  APITypes.OnDeleteArtistSubscription
>;
export const onCreateSong = /* GraphQL */ `subscription OnCreateSong(
  $filter: ModelSubscriptionSongFilterInput
  $owner: String
) {
  onCreateSong(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateSongSubscriptionVariables,
  APITypes.OnCreateSongSubscription
>;
export const onUpdateSong = /* GraphQL */ `subscription OnUpdateSong(
  $filter: ModelSubscriptionSongFilterInput
  $owner: String
) {
  onUpdateSong(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateSongSubscriptionVariables,
  APITypes.OnUpdateSongSubscription
>;
export const onDeleteSong = /* GraphQL */ `subscription OnDeleteSong(
  $filter: ModelSubscriptionSongFilterInput
  $owner: String
) {
  onDeleteSong(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteSongSubscriptionVariables,
  APITypes.OnDeleteSongSubscription
>;
export const onCreateUserProfile = /* GraphQL */ `subscription OnCreateUserProfile(
  $filter: ModelSubscriptionUserProfileFilterInput
  $owner: String
) {
  onCreateUserProfile(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateUserProfileSubscriptionVariables,
  APITypes.OnCreateUserProfileSubscription
>;
export const onUpdateUserProfile = /* GraphQL */ `subscription OnUpdateUserProfile(
  $filter: ModelSubscriptionUserProfileFilterInput
  $owner: String
) {
  onUpdateUserProfile(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateUserProfileSubscriptionVariables,
  APITypes.OnUpdateUserProfileSubscription
>;
export const onDeleteUserProfile = /* GraphQL */ `subscription OnDeleteUserProfile(
  $filter: ModelSubscriptionUserProfileFilterInput
  $owner: String
) {
  onDeleteUserProfile(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteUserProfileSubscriptionVariables,
  APITypes.OnDeleteUserProfileSubscription
>;
