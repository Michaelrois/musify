import React, {useState, ChangeEvent, useEffect} from 'react';
import styled from "styled-components";
import axios from 'axios';
import {Artist} from "../models";

const FileUploadDiv = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 100%;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    margin: 1rem;
    border: 1px solid #ccc;
`;

const InputContainer = styled.div`
    display: flex;
    flex-direction: row;
    max-width: 95%;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    margin: 1rem;
    border: 1px solid #ccc;
`;

type Props = {
    artist: Artist,
    username: string,
    selectedArtist?: string | undefined
};

const FileUpload: React.FC<Props> = ({artist, username, selectedArtist}) => {
    const [file, setFile] = useState<File | null>(null);
    const [message, setMessage] = useState<string>('');
    const [, setSelectedArtist] = useState<Artist | undefined>(undefined);

    useEffect(() => {
        setSelectedArtist(artist);
    }, []);

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setFile(e.target.files[0]);
        }
    };

    const handleUpload = async () => {
        if (!file || !username) {
            setMessage('Please provide both a file and a username.');
            return;
        }

        const formData = new FormData();
        formData.append('file', file);
        formData.append('username', username); // Adapt

        try {
            // Adapt
            const response = await axios.post('https://69xikljut5.execute-api.us-east-1.amazonaws.com/dev/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            setMessage(response.data);
        } catch (error) {
            console.error('Error uploading file:', error);
            setMessage('Error uploading file.');
        }
    };

    return (
        <FileUploadDiv>
            <h1>You can add a new {selectedArtist} mp3 song</h1>
            <InputContainer>
                <input
                    type="file"
                    onChange={handleFileChange}
                />
                <button onClick={handleUpload}>Upload</button>
                {message && <p>{message}</p>}
            </InputContainer>
        </FileUploadDiv>
    );
};

export default FileUpload;