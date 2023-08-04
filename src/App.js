import './App.css';
import React, {useEffect, useState} from 'react';
import {getAnimalImageURL} from "./getAnimalImageURL/getAnimalImageURL";
import PetImage from "./PetImage/PetImage";

function App() {
    const TIME_FOR_EACH_PET_IN_SECONDS = 1;

    const [currentPetImageURL, setCurrentPetImageURL] = useState(
        getAnimalImageURL
    );

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentPetImageURL(getAnimalImageURL);
        }, TIME_FOR_EACH_PET_IN_SECONDS * 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                <PetImage imageURL={currentPetImageURL}/>
            </header>
        </div>
    );
}

export default App;
