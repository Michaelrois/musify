import {useEffect} from "react";
import styled from "styled-components";
import {ProfileCreator} from "../modules/ProfileCreator";

// Styled components
const DivProfileScreen = styled.div`
    display: flex;
    flex-direction: column;
    height: 85vh;
`;

const TextStlyleH1 = styled.h1`
    font-size: 3rem;
    color: darkred;
    margin-bottom: 1rem;
    padding-bottom: 2rem;
    text-align: center;
    text-shadow: 3px 4px 5px black;
`;

export const CreateProfileScreen = () => {
    useEffect(() => {
        document.title = "Musify - Create Profile"
    }, []);
    return (
        <DivProfileScreen>
            <TextStlyleH1>
                Create User Profile
            </TextStlyleH1>
            <ProfileCreator
                username={'mike'}
            />
        </DivProfileScreen>
    )
};

