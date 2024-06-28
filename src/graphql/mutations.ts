/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createArtist = /* GraphQL */ `mutation CreateArtist(
  $input: CreateArtistInput!
  $condition: ModelArtistConditionInput
) {
  createArtist(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateArtistMutationVariables,
  APITypes.CreateArtistMutation
>;
export const updateArtist = /* GraphQL */ `mutation UpdateArtist(
  $input: UpdateArtistInput!
  $condition: ModelArtistConditionInput
) {
  updateArtist(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateArtistMutationVariables,
  APITypes.UpdateArtistMutation
>;
export const deleteArtist = /* GraphQL */ `mutation DeleteArtist(
  $input: DeleteArtistInput!
  $condition: ModelArtistConditionInput
) {
  deleteArtist(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteArtistMutationVariables,
  APITypes.DeleteArtistMutation
>;
export const createSong = /* GraphQL */ `mutation CreateSong(
  $input: CreateSongInput!
  $condition: ModelSongConditionInput
) {
  createSong(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateSongMutationVariables,
  APITypes.CreateSongMutation
>;
export const updateSong = /* GraphQL */ `mutation UpdateSong(
  $input: UpdateSongInput!
  $condition: ModelSongConditionInput
) {
  updateSong(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateSongMutationVariables,
  APITypes.UpdateSongMutation
>;
export const deleteSong = /* GraphQL */ `mutation DeleteSong(
  $input: DeleteSongInput!
  $condition: ModelSongConditionInput
) {
  deleteSong(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteSongMutationVariables,
  APITypes.DeleteSongMutation
>;
export const createUserProfile = /* GraphQL */ `mutation CreateUserProfile(
  $input: CreateUserProfileInput!
  $condition: ModelUserProfileConditionInput
) {
  createUserProfile(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateUserProfileMutationVariables,
  APITypes.CreateUserProfileMutation
>;
export const updateUserProfile = /* GraphQL */ `mutation UpdateUserProfile(
  $input: UpdateUserProfileInput!
  $condition: ModelUserProfileConditionInput
) {
  updateUserProfile(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateUserProfileMutationVariables,
  APITypes.UpdateUserProfileMutation
>;
export const deleteUserProfile = /* GraphQL */ `mutation DeleteUserProfile(
  $input: DeleteUserProfileInput!
  $condition: ModelUserProfileConditionInput
) {
  deleteUserProfile(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteUserProfileMutationVariables,
  APITypes.DeleteUserProfileMutation
>;
