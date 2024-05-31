import { Autocomplete, TextField } from '@mui/material';
import React from 'react';

const AutocompletePetDropdownMenu = ({ shelterPets, setSelectedPet, location }) => {
    const createAnimalLabel = (animal) => {
        return `${animal.ANIMAL_NAME} - ${animal.BREED} (${animal.ANIMAL_ID})`;
    };

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
            key={location + 'autocomplete menu'}
        />
    );
};

export default AutocompletePetDropdownMenu;
