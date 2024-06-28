import styled from "styled-components";
import {Amplify} from "aws-amplify";
import awsExports from '../aws-exports';
import NavigationBar from "../components/NavigationBar";
import UserProfileComponent from "../modules/UserProfileComponent";
import {useEffect} from "react";
Amplify.configure(awsExports)

const TextStyleH1 = styled.h1`
    font-size: 3rem;
    margin-bottom: 1rem;
    padding-bottom: 2rem;
    text-align: center;
    text-shadow: 3px 4px 5px black;
    color: darkred;
`;
export const UserProfileScreen: React.FC = () => {
    useEffect(() => {
        document.title = "Musify - User profile"
    }, []);
    return (
        <div>
            <NavigationBar />
            <TextStyleH1>User Profile</TextStyleH1>
            <UserProfileComponent />
        </div>
    )
};