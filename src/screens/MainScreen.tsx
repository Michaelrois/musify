import React from 'react';
import styled from "styled-components";
import {Amplify} from "aws-amplify";
import awsConfig from "../amplifyconfiguration.json";

Amplify.configure(awsConfig)

const MainTitle = styled.h1`
    font-size: 3rem;
    margin-bottom: 1rem;
    padding-bottom: 2rem;
    text-align: center;
    color: darkred;
    text-shadow: 3px 4px 5px black;
`;

export const MainScreen = () => {
    return (
    <div>
        <MainTitle>MainScreen</MainTitle>
    </div>
    );
}