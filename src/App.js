import './App.css';
import React, {useCallback, useEffect, useState} from 'react';
import PetImage from "./PetImage/PetImage";
import {getAnimalImageURL} from "./GetPetInfo/GetAnimalImageURL/GetAnimalImageURL";
import {GetPetInfo} from "./GetPetInfo/GetPetInfo";

function App() {
    const TIME_FOR_EACH_PET_IN_SECONDS = 10;
    const allPets = GetPetInfo();
    const [currentPetInfo, setCurrentPetInfo] = useState(null);
    const [currentPetImageURL, setCurrentPetImageURL] = useState(
        getAnimalImageURL
    );

    console.log(allPets[0].animals[0]);

    const petListLength = allPets[0].animals.length;

    const pickNewPet = useCallback(() => {
        const newPet = allPets[0].animals[(Math.floor(Math.random() * petListLength))];
        setCurrentPetInfo(newPet);
        setCurrentPetImageURL(getAnimalImageURL(newPet.ANIMAL_ID))
    }, [petListLength, allPets]);

    if (!currentPetInfo) {
        pickNewPet();
    }

    useEffect(() => {
        const interval = setInterval(() => {
            pickNewPet()
        }, TIME_FOR_EACH_PET_IN_SECONDS * 1000);

        return () => clearInterval(interval);
    }, [pickNewPet]);

    return (
        <div className="App">
            <header className="App-header">
                <PetImage imageURL={currentPetImageURL}/>
            </header>
        </div>
    );
}

export default App;
