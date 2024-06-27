import React, {useEffect, useState} from 'react';
import '../App.css';
import axios from "axios";

function AudioComponent() {
    const [audioURL, setAudioURL] = useState<string | undefined>(undefined);

    useEffect(() => {
        axios.get('https://69xikljut5.execute-api.us-east-1.amazonaws.com/dev/files/mike').then(response => {
            console.log(response.data);
            setAudioURL(response.data[0].Url);
        }).catch(error => {
            console.error('Error fetching files:', error);
        })
    }, []);

    return (
        <div className="App">
            <audio
                controls>
                <source src={audioURL} type="audio/mp3"/>
            </audio>
        </div>
    );
}

export default AudioComponent;
