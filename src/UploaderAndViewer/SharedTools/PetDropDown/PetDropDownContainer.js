import React from 'react';
import './PetDropDownContainer.css';
import { useEffect } from 'react';
import AutocompletePetDropdownMenu from './AutocompletePetDrowndownMenu';
import { LinearProgress } from '@mui/material';

const PetDropDownContainer = ({ shelterPets, setSelectedPet, location }) => {
    useEffect(() => {
        setSelectedPet(null);
    }, [location, setSelectedPet]);

    const PleaseSelectLocation = () => {
        return <div className="noLocation">Please select a location.</div>;
    };

    const RenderedComponent = () => {
        if (!location) {
            return <PleaseSelectLocation />;
        } else if (shelterPets == null || shelterPets.length === 0) {
            return <LinearProgress />;
        } else {
            return (
                <AutocompletePetDropdownMenu
                    shelterPets={shelterPets}
                    setSelectedPet={setSelectedPet}
                />
            );
        }
    };

    return (
        <div className={'PetDropDown'}>
            <RenderedComponent />
        </div>
    );
};

export default PetDropDownContainer;
