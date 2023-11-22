import React, {useCallback, useEffect, useState} from "react";
import {Autocomplete, TextField} from "@mui/material";
import {GetPetInfo} from "../SlideShow/GetPetInfo/GetPetInfo";
import "./PetDropDown.css";

const PetDropDown = ({setSelectedPet}) => {
    const [shelterPets, setShelterPets] = useState([]);

    const createAnimalLabel = (animal) => {
        return `${animal.ANIMAL_NAME} - ${animal.BREED} (${animal.ANIMAL_ID})`;
    };
    const cleanUpDownloadedAnimalInfo = useCallback((unmodifiedAnimalInfo) => {
        const cleanedAnimals = [];

        unmodifiedAnimalInfo[0]["animals"].forEach((animal) => {
            cleanedAnimals.push(animal);
        });
        return cleanedAnimals;
    }, []);

    useEffect(() => {
        GetPetInfo().then((pets) => {
                setShelterPets(cleanUpDownloadedAnimalInfo(pets));
            }
        );
    }, [cleanUpDownloadedAnimalInfo]);

    if (shelterPets.length === 0) {
        return (<div className={"Loading"}>Loading...</div>);
    } else {
        return (
            <div className={"PetDropDown"}>
                <Autocomplete
                    renderInput={
                        (params) => <TextField {...params} label="Selected Animal"/>}
                    options={shelterPets}
                    getOptionLabel={(option) => createAnimalLabel(option)}
                    onChange={(event, newValue, reason) => {
                        if (reason === "clear") {
                            setSelectedPet(null);
                        } else {
                            setSelectedPet(newValue);
                        }
                    }}/>
            </div>
        );
    }
};

export default PetDropDown;