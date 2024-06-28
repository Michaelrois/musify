import React, {useEffect, useState} from 'react';
import '../App.css';
import axios from "axios";

interface AudioComponentProps  {
    audioRef: React.RefObject<HTMLAudioElement>;
}
function AudioComponent({audioRef}: AudioComponentProps) {
    const [audioURL, setAudioURL] = useState<string | undefined>(undefined);

    return (
        <div className="App">
            <audio
                ref={audioRef}
                controls>
                <source src={audioURL} type="audio/mp3"/>
            </audio>
        </div>
    );
}

export default AudioComponent;
