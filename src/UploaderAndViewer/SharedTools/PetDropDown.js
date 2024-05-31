import React, { useState } from 'react';
import './PetDropDown.css';
import { useEffect } from 'react';
import { Autocomplete, LinearProgress, TextField } from '@mui/material';

const PetDropDown = ({ shelterPets, setSelectedPet, location }) => {
    const [petsAvailable, setPetsAvailable] = useState(false);

    const createAnimalLabel = (animal) => {
        return `${animal.ANIMAL_NAME} - ${animal.BREED} (${animal.ANIMAL_ID})`;
    };

    useEffect(() => {
        setSelectedPet(null);
    }, [location, setSelectedPet]);

    useEffect(() => {
        shelterPets != null && shelterPets.length > 0
            ? setPetsAvailable(true)
            : setPetsAvailable(false);
    }, [shelterPets]);

    const AutocompleteDropdownMenu = () => {
        return (
            <Autocomplete
                renderInput={(params) => <TextField {...params} label={`Selected Animal`} />}
                options={shelterPets.sort((a, b) => a.ANIMAL_NAME.localeCompare(b.ANIMAL_NAME))}
                getOptionLabel={(option) => createAnimalLabel(option)}
                loading={shelterPets === null || shelterPets === 0}
                loadingText={`Loading...`}
                onChange={(event, newValue, reason) => {
                    if (reason === 'clear') {
                        setSelectedPet(null);
                    } else {
                        setSelectedPet(newValue);
                    }
                }}
                key={location}
            />
        );
    };

    return (
        <div className={'PetDropDown'}>
            {petsAvailable ? <AutocompleteDropdownMenu /> : <LinearProgress />}
        </div>
    );
};

export default PetDropDown;
