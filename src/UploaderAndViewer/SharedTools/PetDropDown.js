import React, { useState } from 'react';
import './PetDropDown.css';
import { useEffect } from 'react';
import { Autocomplete, LinearProgress, TextField } from '@mui/material';

const PetDropDown = ({ shelterPets, setSelectedPet, location }) => {
    const createAnimalLabel = (animal) => {
        return `${animal.ANIMAL_NAME} - ${animal.BREED} (${animal.ANIMAL_ID})`;
    };

    useEffect(() => {
        setSelectedPet(null);
    }, [location, setSelectedPet]);

    const petsAvailable = () => {
        return shelterPets != null && shelterPets.length > 0;
    };

    const AutocompleteDropdownMenu = () => {
        if (petsAvailable) {
            return (
                <div className={'PetDropDownMenu'}>
                    <Autocomplete
                        renderInput={(params) => (
                            <TextField {...params} label={`Selected Animal`} />
                        )}
                        options={shelterPets.sort((a, b) =>
                            a.ANIMAL_NAME.localeCompare(b.ANIMAL_NAME)
                        )}
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
                </div>
            );
        } else {
            return <LinearProgress />;
        }
    };

    const PleaseSelectLocation = () => {
        return <div className="noLocation">Please select a location.</div>;
    };

    return (
        <div className={'PetDropDown'}>
            {location ? <AutocompleteDropdownMenu /> : <PleaseSelectLocation />}
        </div>
    );
};

export default PetDropDown;
