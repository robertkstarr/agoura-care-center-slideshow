import React from 'react';
import {Autocomplete, TextField} from "@mui/material";
import "./PetDropDown.css";
import {useEffect} from "react";

const PetDropDown = ({shelterPets, setSelectedPet, location}) => {

    const createAnimalLabel = (animal) => {
        return `${animal.ANIMAL_NAME} - ${animal.BREED} (${animal.ANIMAL_ID})`;
    };

    useEffect(() => {
        setSelectedPet(null);
    }, [location, setSelectedPet]);

    return (
        <div className={"PetDropDown"}>
            <Autocomplete
                renderInput={
                    (params) => <TextField {...params} label="Selected Animal"/>}
                options={shelterPets.sort((a, b) => a.ANIMAL_NAME.localeCompare(b.ANIMAL_NAME))}
                getOptionLabel={(option) => createAnimalLabel(option)}
                onChange={(event, newValue, reason) => {
                    if (reason === "clear") {
                        setSelectedPet(null);
                    } else {
                        setSelectedPet(newValue);
                    }
                }}
                key={location}
            />
        </div>
    );

};

export default PetDropDown;