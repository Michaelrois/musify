/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createTodo = /* GraphQL */ `mutation CreateTodo(
  $input: CreateTodoInput!
  $condition: ModelTodoConditionInput
) {
  createTodo(input: $input, condition: $condition) {
    id
    name
    description
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
  APITypes.CreateTodoMutationVariables,
  APITypes.CreateTodoMutation
>;
export const updateTodo = /* GraphQL */ `mutation UpdateTodo(
  $input: UpdateTodoInput!
  $condition: ModelTodoConditionInput
) {
  updateTodo(input: $input, condition: $condition) {
    id
    name
    description
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
  APITypes.UpdateTodoMutationVariables,
  APITypes.UpdateTodoMutation
>;
export const deleteTodo = /* GraphQL */ `mutation DeleteTodo(
  $input: DeleteTodoInput!
  $condition: ModelTodoConditionInput
) {
  deleteTodo(input: $input, condition: $condition) {
    id
    name
    description
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
  APITypes.DeleteTodoMutationVariables,
  APITypes.DeleteTodoMutation
>;
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
    owner
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
    owner
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
    owner
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
      owner
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
      owner
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
      owner
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
