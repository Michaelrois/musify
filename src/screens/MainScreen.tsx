import {useEffect, useState} from 'react';
import {Box, Modal, Typography} from "@mui/material";
import CloseTwoToneIcon from '@mui/icons-material/CloseTwoTone';
import styled from "styled-components";
import {ListArtistEntry} from "../components/ListArtistEntry";
import {Artist} from "../models";
import {useArtistContext} from "../context/ArtistContext";
import {getCurrentUser} from "aws-amplify/auth";
import {Amplify} from "aws-amplify";
import awsConfig from "../amplifyconfiguration.json";
import { signOut } from 'aws-amplify/auth';
import FileUpload from "../components/FileUpload";
import AudioComponent from "../components/AudioComponent";

Amplify.configure(awsConfig)

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '50%',
    height: '60%',
    bgcolor: 'background.paper',
    border: '6px double darkred',
    borderRadius: '10px',
    boxShadow: '5px 7px 10px black',
    p: 4,
};

const closeIconStyle = {
    position: "relative",
    top: "-5%",
    right: "-99.5%",
    cursor: "pointer",
    color: "red",
    border: "2px black solid",
    borderRadius: "5px"
}

const modalTitleStyle = {
    position: "relative",
    textAlign: "center",
    top: "-10%",
    color: "darkred",
    fontSize: "3rem",
    fontWeight: "bold",
    textShadow: "2px 3px 5px black",
    textDecoration: "underline"
}

const MainTitle = styled.h1`
    font-size: 6rem;
    padding-bottom: 4rem;
    text-align: center;
    color: darkred;
    text-shadow: 3px 4px 5px black;
`;

const ListArtists = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const MainScreen = () => {
    const {artists} = useArtistContext();
    const [open, setOpen] = useState(false);
    const [selectedArtist, setSelectedArtist] = useState<Artist | null>(null);
    const [userId, setUserId] = useState<string | null>(null);

    useEffect(() => {
        getCurrentUser().then(({userId}) => {
            setUserId(userId);
        })
    }, []);

    const handleSignOut = async () => {
        try {
            await signOut();
        } catch (error) {
            console.log('error signing out: ', error);
        }
    };

    const handleOpen = (artist: Artist) => {
        setSelectedArtist(artist);
        setOpen(true)
    };
    const handleClose = () => setOpen(false);

    return (
    <div>
        <button onClick={handleSignOut}>LogOut</button>
        <MainTitle>Musify - Artists List</MainTitle>
        <ListArtists>
            {artists.map((artist: Artist) => (
                <ListArtistEntry
                    key={artist.id}
                    id={artist.id.toString()}
                    handleOpenModal={() => handleOpen(artist)}
                    name={artist.name}
                    image={artist.image}
                    tooltipText={artist.tooltipText}
                />
            ))}
        </ListArtists>
        <Modal
            open={open}
            /*onClose={handleClose}*/
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <CloseTwoToneIcon
                    onClick={handleClose}
                    sx={closeIconStyle}
                />
                <Typography
                    id="modal-modal-title"
                    variant="h5"
                    component="h2"
                    sx={modalTitleStyle}
                >
                    {selectedArtist?.name}
                </Typography>
                <Typography id="modal-modal-description" sx={{mt: 2}}>
                    {selectedArtist?.description}
                </Typography>
                <AudioComponent />
                <FileUpload 
                    username={'mike'} artist={artists[0]} selectedArtist={selectedArtist?.name}/>
            </Box>
        </Modal>
    </div>
    );
}