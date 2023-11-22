import React, {useCallback, useEffect, useState} from "react";
import {Autocomplete, TextField} from "@mui/material";
import {GetPetInfo} from "../SlideShow/GetPetInfo/GetPetInfo";

const PetDropDown = ({setSelectedPet}) => {
    const [shelterPets, setShelterPets] = useState([]);

    const createAnimalLabel = (animal) => {
        return `${animal.ANIMAL_NAME} - ${animal.BREED} (${animal.ANIMAL_ID})`;
    };
    const cleanUpDownloadedAnimalInfo = useCallback((unmodifiedAnimalInfo) => {
        const cleanedAnimals = [];

        unmodifiedAnimalInfo[0]["animals"].forEach((animal) => {
            cleanedAnimals.push({
                label: createAnimalLabel(animal),
                id: animal.ANIMAL_ID
            });
        });

        return cleanedAnimals;
    }, []);

    useEffect(() => {
        setShelterPets([{label: "dog 1", id: 1}, {label: "cat 2", id: 2}, {label: "dog 2", id: 3}, {
            label: "cat 3",
            id: 4
        }]);
        GetPetInfo().then((pets) => {
                setShelterPets(cleanUpDownloadedAnimalInfo(pets));
            }
        );
    }, [cleanUpDownloadedAnimalInfo]);

    if (shelterPets.length === 0) {
        return (<div>Loading...</div>);
    } else {
        return (
            <div>
                <Autocomplete
                    renderInput={
                        (params) => <TextField {...params} label="Selected Animal"/>}
                    options={shelterPets}
                    onChange={(event, newValue, reason) => {
                        reason === "clear" ? setSelectedPet("") :
                            setSelectedPet(event.target.outerText);
                    }}/>
            </div>
        );
    }
};

export default PetDropDown;