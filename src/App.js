import './App.css';
import React, {useCallback, useEffect, useState} from 'react';
import {GetPetInfo} from "./GetPetInfo/GetPetInfo";
import PetDisplay from "./PetInfo/PetDisplay";

function App() {
    const TIME_FOR_EACH_PET_IN_SECONDS = 10;
    const allPets = GetPetInfo();
    const [currentPetInfo, setCurrentPetInfo] = useState(null);

    const petListLength = allPets[0].animals.length;

    const pickNewPet = useCallback(() => {
        const newPet = allPets[0].animals[(Math.floor(Math.random() * petListLength))];
        setCurrentPetInfo(newPet);
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
                <PetDisplay currentPet={currentPetInfo}/>
            </header>
        </div>
    );
}

export default App;
