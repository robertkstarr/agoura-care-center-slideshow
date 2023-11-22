import React, {useCallback, useEffect, useState} from "react";
import {GetPetInfo} from "../GetPetInfo/GetPetInfo";
import LandscapeView from "./LandscapeView/LandscapeView";
import {PortraitView} from "./PortraitView/PortraitView";
import {capitalizeEveryWordOfString} from "./DisplayTools";
import "./PetDisplay.css";

const PetDisplay = () => {
    const TIME_FOR_EACH_PET_IN_SECONDS = 10;
    const SECONDS_IN_A_DAY = 3600 * 24;
    const [allPets, setAllPets] = useState([]);
    const [currentPet, setCurrentPet] = useState(null);
    const [timeSinceLastSwitch, setTimeSinceLastSwitch] = useState(0);
    const isPortrait = window.innerHeight > window.innerWidth;

    const pickNewPet = useCallback(() => {
        setTimeSinceLastSwitch(0);

        if (allPets.length > 0) {
            const petListLength = allPets[0].animals.length;
            const newPet = allPets[0].animals[(Math.floor(Math.random() * petListLength))];
            setCurrentPet(newPet);
        }
    }, [allPets]);

    useEffect(() => {
        GetPetInfo().then((pets) => {
                setAllPets(pets);
            }
        );
    }, []);

    useEffect(() => {
        pickNewPet();
    }, [pickNewPet, allPets]);

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
        return (
            <div className={"PetDisplay"}>
                <div className={"PetName"}>{capitalizeEveryWordOfString(currentPet.ANIMAL_NAME)}</div>
                {!isPortrait && <LandscapeView currentPet={currentPet} pickNewPet={pickNewPet}/>}
                {isPortrait && <PortraitView currentPet={currentPet} pickNewPet={pickNewPet}/>}
            </div>);
    } else {
        return (<div>Loading...</div>);
    }
};

export default PetDisplay;