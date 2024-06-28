import React, {useState, useRef, ChangeEvent} from "react";
import {Typography} from "@mui/material";
import CloseTwoToneIcon from "@mui/icons-material/CloseTwoTone";
import styled from "styled-components";
import {uploadData} from 'aws-amplify/storage';
import {DataStore} from "@aws-amplify/datastore";
import {Artist, UserProfile} from "../models";
import {getCurrentUser, fetchUserAttributes} from "aws-amplify/auth";
import {useNavigate} from 'react-router-dom';
import '../index.css';
import FileUpload from "../components/FileUpload";
import axios from "axios";

// Styled components
const DivContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    width: 30vw;
    height: 80vh;
    background-color: -moz-default-background-color;
    border: 3px darkred double;
    box-shadow: 4px 4px 3px black;
    padding: 4px;
`;

const DivHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const AddressSubTitle = styled.h2`
    font-weight: bold;
    padding: 1rem 0 1rem 9rem;
    color: darkred;
    text-shadow: 1px 1px 1px black;
`;

const InputStyle = styled.input`
    width: 300px;
    border: none;
    border-bottom: 0.5px black solid;
    border-color: darkred;
    margin: 0 2rem 1rem 0;
`;

const LabelStyle = styled.label`
    font-size: 16px;
    font-weight: bold;
    width: 35%;
    color: darkred;
    text-shadow: 1px 1px 1px black;
`;

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

const DivStyledInput = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 80%;
    padding-left: 1rem;
`;

const TextAreaStyle = styled.textarea`
    width: 300px;
    height: auto;
    margin-left: -1rem;
    border: 0.2px darkred solid;
    resize: vertical; /* Allows the textarea to be resizable vertically */
`;

const ButtonContainer = styled.div`
    display: flex;
    width: 50%;
    justify-content: space-between;
    padding-top: 1.5rem;
    margin: 0 auto;
`;

const CustomInputFile = styled.input.attrs({ type: 'file' })`
    color: darkred;
    font-weight: bold;
    
&::file-selector-button {
    color: darkred;
    font-size: 1rem;
    font-weight: bold;
    text-shadow: 1px 1px 2px black;
    border: 2px darkred solid;
    border-radius: 5px;
    box-shadow: 2px 3px 5px black;
    padding: 5px;
    cursor: pointer;

    &:hover {
        background-color: darkred;
        color: white;
    }
  }
`;

const UploadButton = styled.button`
  color: darkred;
  font-size: 1rem;
  font-weight: bold;
  text-shadow: 1px 1px 2px black;
  border: 2px darkred solid;
  border-radius: 5px;
  box-shadow: 2px 3px 5px black;
  padding: 5px;
  cursor: pointer;

  &:hover {
    background-color: darkred;
    color: white;
  }
`;

const closeIconStyle = {
    cursor: "pointer",
    color: "red",
    border: "2px black solid",
    borderRadius: "5px",
}

const modalTitleStyle = {
    textAlign: "center",
    fontWeight: "bold",
    padding: "1rem 0  1rem 9rem",
    color: "darkred",
    textShadow: "1px 1px 1px black"
}


interface FormData {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    address: {
        street: string;
        city: string;
        stateProvince: string;
        zipCode: string;
        country: string;
    };
    avatar: string | File; // Allow avatar to be either a string or a File
    bio: string;
}

type Props = {
    username: string,
};

export const ProfileCreator: React.FC<Props> = ({username}) => {
    const [open, setOpen] = useState(false);
    const [formData, setFormData] = useState<FormData>({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        address: {
            street: '',
            city: '',
            stateProvince: '',
            zipCode: '',
            country: '',
        },
        avatar: '',
        bio: ''
    });

    const navigate = useNavigate();
    const formRef = useRef<HTMLFormElement>(null);
    const [file, setFile] = useState<File | null>(null);
    const [message, setMessage] = useState<string>('');

    const handleClose = () => setOpen(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = e.target;
        if (name === "avatar" && e.target instanceof HTMLInputElement && e.target.files) {
            // Handle file input separately
            setFormData({...formData, avatar: e.target.files[0]});
        } else if (name.includes("address.")) {
            const addressField = name.split(".")[1];
            setFormData(prevState => ({
                ...prevState,
                address: {
                    ...prevState.address,
                    [addressField]: value
                }
            }));
        } else {
            setFormData({...formData, [name]: value});
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.firstName || !formData.lastName || !formData.phoneNumber || !formData.address.street || !formData.address.city || !formData.address.stateProvince ||!formData.address.zipCode || !formData.address.country) {
            alert("Please fill in all required fields.");
            return;
        }
        try {
            const currentUser = await getCurrentUser();
            const userAttributes = await fetchUserAttributes();

            let avatarUrl = "";
            if (formData.avatar) {
                const avatarFile = formData.avatar as unknown as File;
                try {
                    const result = uploadData({
                        path: `public/avatars/${currentUser.username}/${avatarFile.name}`,
                        data: avatarFile,
                        options: {
                            contentType: avatarFile.type,
                            onProgress: ({transferredBytes, totalBytes}) => {
                                if (totalBytes) {
                                    console.log(`Upload progress ${Math.round((transferredBytes / totalBytes) * 100)} %`);
                                }
                            },
                        },
                    })
                        .result;
                    console.log('Succeeded: ', result);
                } catch (error) {
                    console.log('Error uploading file: ', error);
                }
            }

            const newUserProfile = new UserProfile({
                userId: currentUser.username,
                email: userAttributes.email,
                firstName: formData.firstName,
                lastName: formData.lastName,
                phoneNumber: formData.phoneNumber,
                address: {
                    street: formData.address.street,
                    city: formData.address.city,
                    stateProvince: formData.address.stateProvince,
                    zipCode: formData.address.zipCode,
                    country: formData.address.country,
                },
                avatar: avatarUrl,
                bio: formData.bio,
            });

            await DataStore.save(newUserProfile);
            handleClose(); // Close the form on successful submission
            navigate('/profile'); // Redirect to UserProfileScreen
        } catch (error) {
            console.error("Error saving user profile: ", error);
        }
    };

    const handleCancel = () => {
        navigate('/'); // Redirect to MainScreen
    };

    const handleReset = () => {
        formRef.current?.reset();
        setFormData({
            firstName: '',
            lastName: '',
            phoneNumber: '',
            address: {
                street: '',
                city: '',
                stateProvince: '',
                zipCode: '',
                country: '',
            },
            avatar: '',
            bio: ''
        });
    };

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
        <div>
            <DivContainer>
                <DivHeader>
                    <Typography
                        id="form-title"
                        variant="h5"
                        component="h2"
                        sx={modalTitleStyle}
                    >
                        User profile editing
                    </Typography>
                    <CloseTwoToneIcon
                        onClick={handleCancel}
                        sx={closeIconStyle}
                    />
                </DivHeader>

                <StyledForm ref={formRef} onSubmit={handleSubmit}>
                    <DivStyledInput>
                        <LabelStyle>First Name:</LabelStyle>
                        <InputStyle
                            type="text"
                            name="firstName"
                            onChange={handleChange}
                            placeholder="Example: Michael"
                        />
                    </DivStyledInput>
                    <DivStyledInput>
                        <LabelStyle>Last Name:</LabelStyle>
                        <InputStyle
                            type="text"
                            name="lastName"
                            onChange={handleChange}
                            placeholder="Example: Sirois"
                        />
                    </DivStyledInput>
                    <DivStyledInput>
                        <LabelStyle>Phone Number:</LabelStyle>
                        <InputStyle
                            type="text"
                            name="phoneNumber"
                            onChange={handleChange}
                            placeholder="1-(819)-555-5555"
                        />
                    </DivStyledInput>
                    <AddressSubTitle>
                        Enter your full address
                    </AddressSubTitle>
                    <DivStyledInput>
                        <LabelStyle>Street:</LabelStyle>
                        <InputStyle
                            type="text"
                            name="address.street"
                            onChange={handleChange}
                            placeholder="555 Avenue du Peuple"
                        />
                    </DivStyledInput>
                    <DivStyledInput>
                        <LabelStyle>City:</LabelStyle>
                        <InputStyle
                            type="text"
                            name="address.city"
                            onChange={handleChange}
                            placeholder="Shawinigan"
                        />
                    </DivStyledInput>
                    <DivStyledInput>
                        <LabelStyle>State/Province:</LabelStyle>
                        <InputStyle
                            type="text"
                            name="address.stateProvince"
                            onChange={handleChange}
                            placeholder="Quebec"
                        />
                    </DivStyledInput
                    ><DivStyledInput>
                        <LabelStyle>Zip Code:</LabelStyle>
                        <InputStyle
                            type="text"
                            name="address.zipCode"
                            onChange={handleChange}
                            placeholder="G9N 1C6"
                        />
                    </DivStyledInput>
                    <DivStyledInput>
                        <LabelStyle>Country:</LabelStyle>
                        <InputStyle
                            type="text"
                            name="address.country"
                            onChange={handleChange}
                            placeholder="Canada"
                        />
                    </DivStyledInput>
                    <DivStyledInput
                        style={{paddingBottom: "1rem"}}
                    >
                        <LabelStyle>Avatar:</LabelStyle>
                        <CustomInputFile
                            type="file"
                            onChange={handleFileChange}
                        />
                        <UploadButton
                            onClick={handleUpload}
                        >
                            Upload
                        </UploadButton>
                        {message && <p>{message}</p>}
                    </DivStyledInput>
                    <DivStyledInput>
                        <LabelStyle>Bio:</LabelStyle>
                        <TextAreaStyle
                            name="bio"
                            onChange={handleChange}
                            placeholder="Tell us more about you."
                        />
                    </DivStyledInput>
                    <ButtonContainer>
                        <button type="submit" title="save" className='profileCreatorBtn'>Save</button>
                        <input type="reset" value="Reset" title="Reset" onClick={handleReset}
                               className='profileCreatorBtn'/>
                        <button type="button" title="Cancel" onClick={handleCancel}
                                className='profileCreatorBtn'>Cancel
                        </button>
                    </ButtonContainer>
                </StyledForm>
            </DivContainer>
        </div>
    );
}
