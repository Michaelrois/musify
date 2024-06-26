import React, { createContext, useState, useEffect, useContext } from 'react';
import { Artist } from "../models";
import { DataStore } from "@aws-amplify/datastore";

interface  ArtistContextType {
    artists: Artist[];
    loadArtists: () => Promise<void>;
}

const ArtistContext = createContext<ArtistContextType | undefined>(undefined);

export const useArtistContext = () => {
    const context = useContext(ArtistContext);
    if (context === undefined) {
        throw new Error('useArtistContext must be used within a ArtistProvider');
    }
    return context;
};

interface ArtistProviderProps {
    children: React.ReactNode;
}

export const ArtistProvider = ({ children }: ArtistProviderProps) => {
    const [artists, setArtists] = useState<Artist[]>([]);

    const loadArtists = async () => {
        const artists = await DataStore.query(Artist);
        setArtists(artists);
    };

    useEffect (() => {
        loadArtists();
    }, []);

    return (
        <ArtistContext.Provider value={{ artists, loadArtists }}>
            {children}
        </ArtistContext.Provider>
    );
}