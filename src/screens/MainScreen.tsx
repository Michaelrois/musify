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

Amplify.configure(awsConfig)

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 465,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const closeIconStyle = {
    position: "relative",
    top: "-28px",
    right: "-400px",
    cursor: "pointer",
    color: "red",
    border: "2px black solid",
    borderRadius: "5px"
}

const modalTitleStyle = {
    position: "relative",
    textAlign: "center",
    top: "-55px",
    color: "black",
    fontWeight: "bold",
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
    console.log(artists);
    useEffect(() => {
        getCurrentUser().then(({userId}) => {
            setUserId(userId);
        })
    }, []);

    const handleOpen = (artist: Artist) => {
        setSelectedArtist(artist);
        setOpen(true)
    };
    const handleClose = () => setOpen(false);

    return (
    <div>
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
            </Box>
        </Modal>
    </div>
    );
}