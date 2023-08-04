import './App.css';
import React, {useEffect, useState} from 'react';
import {getAnimalImageURL} from "./getAnimalImageURL/getAnimalImageURL";

function App() {
    const TIME_FOR_EACH_PET_IN_SECONDS = 5;
    const animalImageURL = getAnimalImageURL();

    const [petImage, setPetImage] = useState(() => {
        return getAnimalImageURL
    });

    useEffect(() => {
        const interval = setInterval(() => {
            setPetImage(getAnimalImageURL);
        }, TIME_FOR_EACH_PET_IN_SECONDS * 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                <img src={petImage} className="App-logo" alt="Pet"/>
            </header>
        </div>
    );
}

export default App;
