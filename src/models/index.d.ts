import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";



type EagerAddress = {
  readonly street?: string | null;
  readonly city?: string | null;
  readonly stateProvince?: string | null;
  readonly zipCode?: string | null;
  readonly country?: string | null;
}

type LazyAddress = {
  readonly street?: string | null;
  readonly city?: string | null;
  readonly stateProvince?: string | null;
  readonly zipCode?: string | null;
  readonly country?: string | null;
}

export declare type Address = LazyLoading extends LazyLoadingDisabled ? EagerAddress : LazyAddress

export declare const Address: (new (init: ModelInit<Address>) => Address)

type EagerArtist = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Artist, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly label?: string | null;
  readonly date?: string | null;
  readonly description?: string | null;
  readonly personalPageLink?: string | null;
  readonly image: string;
  readonly tooltipText?: string | null;
  readonly songs?: (Song | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyArtist = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Artist, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly label?: string | null;
  readonly date?: string | null;
  readonly description?: string | null;
  readonly personalPageLink?: string | null;
  readonly image: string;
  readonly tooltipText?: string | null;
  readonly songs: AsyncCollection<Song>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Artist = LazyLoading extends LazyLoadingDisabled ? EagerArtist : LazyArtist

export declare const Artist: (new (init: ModelInit<Artist>) => Artist) & {
  copyOf(source: Artist, mutator: (draft: MutableModel<Artist>) => MutableModel<Artist> | void): Artist;
}

type EagerSong = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Song, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly artist?: Artist | null;
  readonly title: string;
  readonly duration: number;
  readonly album: string;
  readonly releaseDate: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly artistSongsId?: string | null;
}

type LazySong = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Song, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly artist: AsyncItem<Artist | undefined>;
  readonly title: string;
  readonly duration: number;
  readonly album: string;
  readonly releaseDate: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly artistSongsId?: string | null;
}

export declare type Song = LazyLoading extends LazyLoadingDisabled ? EagerSong : LazySong

export declare const Song: (new (init: ModelInit<Song>) => Song) & {
  copyOf(source: Song, mutator: (draft: MutableModel<Song>) => MutableModel<Song> | void): Song;
}

type EagerUserProfile = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserProfile, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userId?: string | null;
  readonly email?: string | null;
  readonly firstName?: string | null;
  readonly lastName?: string | null;
  readonly phoneNumber?: string | null;
  readonly address?: Address | null;
  readonly avatar?: string | null;
  readonly bio?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUserProfile = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserProfile, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userId?: string | null;
  readonly email?: string | null;
  readonly firstName?: string | null;
  readonly lastName?: string | null;
  readonly phoneNumber?: string | null;
  readonly address?: Address | null;
  readonly avatar?: string | null;
  readonly bio?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type UserProfile = LazyLoading extends LazyLoadingDisabled ? EagerUserProfile : LazyUserProfile

export declare const UserProfile: (new (init: ModelInit<UserProfile>) => UserProfile) & {
  copyOf(source: UserProfile, mutator: (draft: MutableModel<UserProfile>) => MutableModel<UserProfile> | void): UserProfile;
}