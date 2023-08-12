import React, {useCallback, useEffect, useState} from "react";
import PetImage from "../PetImage/PetImage";
import PetInfo from "./PetInfo";
import {getAnimalImageURL} from "../GetPetInfo/GetAnimalImageURL/GetAnimalImageURL";
import "./PetDisplay.css";
import {capitalizeEveryWordOfString} from "./DisplayTools";
import {GetPetInfo} from "../GetPetInfo/GetPetInfo";

const PetDisplay = () => {
    const TIME_FOR_EACH_PET_IN_SECONDS = 10;
    const SECONDS_IN_A_DAY = 3600 * 24;
    const allPets = GetPetInfo();
    const [currentPet, setCurrentPet] = useState(null);
    const [timeSinceLastSwitch, setTimeSinceLastSwitch] = useState(0);

    const petListLength = allPets[0].animals.length;

    const pickNewPet = useCallback(() => {
        setTimeSinceLastSwitch(0);
        const newPet = allPets[0].animals[(Math.floor(Math.random() * petListLength))];
        setCurrentPet(newPet);
    }, [petListLength, allPets]);

    if (!currentPet) {
        pickNewPet();
    }
    useEffect(() => {
        const interval = setInterval(() => {
            if (timeSinceLastSwitch >= TIME_FOR_EACH_PET_IN_SECONDS) {
                pickNewPet();
            } else {
                setTimeSinceLastSwitch(timeSinceLastSwitch + 1);
            }
        }, 1000);

        const refreshInterval = setInterval(() => {
            window.location.reload();
        }, SECONDS_IN_A_DAY * 1000);

        return () => {
            clearInterval(interval);
            clearInterval(refreshInterval);
        };
    }, [pickNewPet, timeSinceLastSwitch, SECONDS_IN_A_DAY]);

    if (currentPet) {
        const currentPetImageURL = getAnimalImageURL(currentPet.ANIMAL_ID);

        return (
            <div className={"PetDisplay"}>
                <div className={"PetName"}>{capitalizeEveryWordOfString(currentPet.ANIMAL_NAME)}</div>
                <PetImage onClick={pickNewPet} imageURL={currentPetImageURL}/>
                <PetInfo pet={currentPet}/>
            </div>);
    } else {
        return (<div>Loading</div>);
    }
};

export default PetDisplay;