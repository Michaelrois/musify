import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { MainScreen } from './screens/MainScreen';
import styled from "styled-components";
import {Amplify} from 'aws-amplify';
import awsExports from './aws-exports';
import {Authenticator, useAuthenticator, View, useTheme, Heading, Image, Text, Button} from "@aws-amplify/ui-react";
import '@aws-amplify/ui-react/styles.css';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

Amplify.configure(awsExports);

// Define your routes
const router = createBrowserRouter([
    {
        path: "/",
        element: <MainScreen/>,
    },
]);

// Styled Components
const AuthText = styled.p`
    color: darkred;
    text-shadow: 2px 2px black;
`;

const AuthTextSmall = styled.p`
    font-size: 18px;
    color: darkred;
    text-align: center;
    text-shadow: 1px 1px black;
`;

// Define your custom components
const components = {
    Header() {
        const {tokens} = useTheme();

        return (
            <View textAlign="center" padding={tokens.space.large}>
                <Image
                    alt="Musify Logo"
                    src="./logo128.png"
                />
            </View>
        );
    },

    Footer() {
        const {tokens} = useTheme();

        return (
            <View textAlign="center" paddingTop="0.5rem">
                <Text color="darkred"
                      fontSize={tokens.fontSizes?.xs}>
                    Musify &copy; All Rights Reserved 2024 AEC Développement d'applications Web
                </Text>
            </View>
        );
    },

    SignIn: {
        Header() {

            return (
                <Heading
                    level={2}
                    textAlign={"center"}
                    color="darkred"
                >
                    <AuthText>
                        Sign in to your account
                    </AuthText>
                </Heading>
            );
        },
        Footer() {
            const {toForgotPassword} = useAuthenticator();

            return (
                <View textAlign="center">
                    <Button
                        fontWeight="normal"
                        onClick={toForgotPassword}
                        size="small"
                        variation="link"
                    >
                        <AuthTextSmall>
                            Reset Password
                        </AuthTextSmall>
                    </Button>
                </View>
            );
        },
    },

    SignUp: {
        Header: function () {

            return (
                <Heading
                    level={2}
                    textAlign={"center"}
                >
                    <AuthText>
                        Create a new account
                    </AuthText>
                </Heading>
            );
        },
        Footer() {
            const {toSignIn} = useAuthenticator();

            return (
                <View textAlign="center">
                    <Button
                        fontWeight="normal"
                        onClick={toSignIn}
                        size="small"
                        variation="link"
                    >
                        <AuthTextSmall>
                            Back to Sign In
                        </AuthTextSmall>
                    </Button>
                </View>
            );
        },
    },
    ConfirmSignUp: {
        Header() {
            return (
                <Heading
                    level={2}
                    textAlign={"center"}
                >
                    <AuthText>
                        Enter Information:
                    </AuthText>
                </Heading>
            );
        },
        Footer() {
            return <AuthTextSmall>Thank you to subscribe.</AuthTextSmall>;
        },
    },
    SetupTotp: {
        Header() {
            return (
                <Heading
                    level={2}
                    textAlign={"center"}
                >
                    <AuthText>
                        Enter Information:
                    </AuthText>
                </Heading>
            );
        },
        Footer() {
            return <AuthTextSmall>Thank you to subscribe.</AuthTextSmall>;
        },
    },
    ConfirmSignIn: {
        Header() {

            return (
                <Heading
                    level={2}
                    textAlign={"center"}
                >
                    <AuthText>
                        Enter Information:
                    </AuthText>
                </Heading>
            );
        },
        Footer() {
            return <AuthTextSmall>Welcome to Musify.</AuthTextSmall>;
        },
    },
    ForgotPassword: {
        Header() {

            return (
                <Heading
                    level={2}
                    textAlign={"center"}
                >
                    <AuthText>
                        Enter Information:
                    </AuthText>
                </Heading>
            );
        },
        Footer() {
            return <AuthTextSmall>An email will be sent to you.</AuthTextSmall>;
        },
    },
    ConfirmResetPassword: {
        Header() {

            return (
                <Heading
                    level={2}
                    textAlign={"center"}
                >
                    <AuthText>
                        Enter Information:
                    </AuthText>
                </Heading>
            );
        },
        Footer() {
            return <AuthTextSmall>Confirm reset password.</AuthTextSmall>;
        },
    },
};

// Define your custom form fields
const formFields = {
    signIn: {
        username: {
            label: 'Email:',
            placeholder: 'Enter your email',
            isRequired: true,
            order: 1,
        },
        password: {
            label: 'Password:',
            placeholder: 'Enter your password',
            isRequired: true,
            order: 2,
        },
    },
    signUp: {
        password: {
            label: 'Password:',
            placeholder: 'Enter your Password:',
            isRequired: true,
            order: 2,
        },
        confirm_password: {
            label: 'Confirm Password:',
            order: 3,
        },
        email: {
            label: 'Email:',
            placeholder: 'Enter your email:',
            isRequired: true,
            order: 1,
        },
    },
    forceNewPassword: {
        password: {
            placeholder: 'Enter your Password:',
        },
    },
    forgotPassword: {
        username: {
            placeholder: 'Enter your email:',
        },
    },
    confirmResetPassword: {
        confirmation_code: {
            placeholder: 'Enter your Confirmation Code:',
            label: 'New Label',
            isRequired: false,
        },
        confirm_password: {
            placeholder: 'Enter your Password Please:',
        },
    },
    setupTotp: {
        QR: {
            totpIssuer: 'test issuer',
            totpUsername: 'amplify_qr_test_user',
        },
        confirmation_code: {
            label: 'New Label',
            placeholder: 'Enter your Confirmation Code:',
            isRequired: false,
        },
    },
    confirmSignIn: {
        confirmation_code: {
            label: 'New Label',
            placeholder: 'Enter your Confirmation Code:',
            isRequired: false,
        },
    },
};



const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <Authenticator.Provider>
            <Authenticator
                formFields={formFields}
                components={components}
                signUpAttributes={['email']}
                className="container"
            >
                {({signOut, user}) => (
                    <View>
                        <RouterProvider router={router}/>
                    </View>
                )}
            </Authenticator>
        </Authenticator.Provider>
    </React.StrictMode>
);


reportWebVitals();
