import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";





type EagerTodo = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Todo, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly description?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTodo = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Todo, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly description?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Todo = LazyLoading extends LazyLoadingDisabled ? EagerTodo : LazyTodo

export declare const Todo: (new (init: ModelInit<Todo>) => Todo) & {
  copyOf(source: Todo, mutator: (draft: MutableModel<Todo>) => MutableModel<Todo> | void): Todo;
}

type EagerArtist = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Artist, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly label?: string | null;
  readonly personalPageLink?: string | null;
  readonly image: string;
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
  readonly personalPageLink?: string | null;
  readonly image: string;
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