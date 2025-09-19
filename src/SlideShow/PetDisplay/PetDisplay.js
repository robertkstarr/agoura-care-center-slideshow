import { useCallback, useEffect, useState } from 'react';
import { capitalizeEveryWordOfString } from './DisplayTools';
import LandscapeView from './LandscapeView/LandscapeView';
import './PetDisplay.css';
import { onValue, ref } from 'firebase/database';
import { database } from '../../UploaderAndViewer/FirebaseConfigFiles/FirebaseConfig';
import { PortraitView } from './PortraitView/PortraitView';

const PetDisplay = ({ location }) => {
    const TIME_FOR_EACH_PET_IN_SECONDS = 10;
    const SECONDS_IN_A_DAY = 3600 * 24;
    const [allPets, setAllPets] = useState([]);
    const [currentPet, setCurrentPet] = useState(null);
    const [timeSinceLastSwitch, setTimeSinceLastSwitch] = useState(0);
    const isPortrait = window.innerHeight > window.innerWidth;

    const pickNewPet = useCallback(() => {
        setTimeSinceLastSwitch(0);

        if (allPets.length > 0) {
            const petListLength = allPets.length;
            const newPet = allPets[Math.floor(Math.random() * petListLength)];
            setCurrentPet(newPet);
        }
    }, [allPets]);

    useEffect(() => {
        onValue(ref(database, `Public/CurrentAnimals/${location}`), (snapshot) => {
            setAllPets(Object.values(snapshot.val()));
        });
    }, [location]);

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
    }, [pickNewPet, timeSinceLastSwitch, SECONDS_IN_A_DAY, location]);

    if (currentPet) {
        return (
            <div className={'PetDisplay'}>
                <div className={'PetName'}>
                    {capitalizeEveryWordOfString(currentPet.animalName)}
                </div>
                {!isPortrait && (
                    <LandscapeView
                        currentPet={currentPet}
                        pickNewPet={pickNewPet}
                        location={location}
                    />
                )}
                {isPortrait && (
                    <PortraitView
                        currentPet={currentPet}
                        pickNewPet={pickNewPet}
                        location={location}
                    />
                )}
            </div>
        );
    } else {
        return <div>Loading...</div>;
    }
};

export default PetDisplay;
