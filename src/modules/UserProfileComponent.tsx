import {DataStore} from '@aws-amplify/datastore';
import {getCurrentUser} from 'aws-amplify/auth';
import {useEffect, useState} from 'react';
import {UserProfile} from '../models';
import styled from "styled-components";
import {getProperties} from 'aws-amplify/storage';
import axios from "axios";

const UserProfileContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    max-width: 400px;
    margin: 0 auto;
`;

const Avatar = styled.img`
    width: 150px;
    height: 150px;
    border-radius: 50%;
    margin-bottom: 1rem;
`;

const AddressContainer = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    margin-top: 1rem;
    padding: 1rem;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    width: 100%;
`;

const Label = styled.label`
    font-size: 1.2rem;
    font-weight: bold;
    color: black;
`;

const SectionBox = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    padding-top: 1.5rem;
`;

const Title = styled.h2`
    margin: 0.5rem 0;
    color: darkred;
    font-size: 2rem;
    text-shadow: 2px 2px 3px black;
`;

const UserInfo = styled.div`
    text-align: center;
`;

const UserDetail = styled.p`
    margin: 0.3rem 0;
    color: #666;
`;

interface FileData {
    Key: string;
    Size: number;
    LastModified: string;
    Url: string;
}


const UserProfileComponent: React.FC = () => {
    const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
    const [avatarUrl, setAvatarUrl] = useState<string | null>(null);
    const [fileData, setFileData] = useState<FileData[] | null>(null);

    useEffect(() => {
        axios.get('https://69xikljut5.execute-api.us-east-1.amazonaws.com/dev/files/mike').then(response => {
            console.log(response.data);
            setFileData(response.data);
        }).catch(error => {
            console.error('Error fetching files:', error);
        })
    }, []);

    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                const currentUser = await getCurrentUser();
                const profiles = await DataStore.query(UserProfile, (profile) => profile.userId.eq(currentUser?.username));
                if (profiles.length > 0) {
                    setUserProfile(profiles[0]);
                    if (profiles[0].avatar) {
                        const avatarPath = profiles[0].avatar;
                        await handleGetProperties(avatarPath);
                    }
                }
            } catch (error) {
                console.error('Error fetching user profile:', error);
            }
        };

        fetchUserProfile();
    }, []);

    const handleGetProperties = async (path: string) => {
        try {
            const result = await getProperties({path});
            const avatarUrl = result.path;
            setAvatarUrl(avatarUrl);
        } catch (error) {
            console.error('Error getting properties:', error);
        }
    };


    if (!userProfile) {
        return <div>Loading...</div>;
    }

    return (
        <UserProfileContainer>
            <Avatar src={avatarUrl || 'https://via.placeholder.com/150'}
                    alt={`${userProfile.firstName} ${userProfile.lastName}`}/>
            <UserInfo>
                <Title>{`${userProfile.firstName} ${userProfile.lastName}`}</Title>
                <SectionBox>
                    <UserDetail><Label>User ID: </ Label>{userProfile.userId}</UserDetail>
                    <UserDetail><Label>Email: </ Label>{userProfile.email}</UserDetail>
                    <UserDetail><Label>First Name: </Label>{userProfile.firstName}</UserDetail>
                    <UserDetail><Label>Last Name: </Label>{userProfile.lastName}</UserDetail>
                    <UserDetail><Label>Phone Number: </Label>{userProfile.phoneNumber}</UserDetail>
                    <UserDetail><Label>Avatar: </Label>{userProfile.avatar}</UserDetail>
                    <UserDetail><Label>Bio: </Label>{userProfile.bio}</UserDetail>
                </SectionBox>
            </UserInfo>
            <AddressContainer>
                <Title>Address</ Title>
                <SectionBox>
                    <UserDetail><Label>Street: </Label>{userProfile.address?.street}</UserDetail>
                    <UserDetail><Label>City: </Label>{userProfile.address?.city}</UserDetail>
                    <UserDetail><Label>State/Province: </Label>{userProfile.address?.stateProvince}</UserDetail>
                    <UserDetail><Label>Zip/Postal Code: </Label>{userProfile.address?.zipCode}</UserDetail>
                    <UserDetail><Label>Country: </Label>{userProfile.address?.country}</UserDetail>
                </SectionBox>
            </AddressContainer>
        </UserProfileContainer>
    );
};

export default UserProfileComponent;