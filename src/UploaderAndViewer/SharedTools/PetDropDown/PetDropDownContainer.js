import { LinearProgress } from '@mui/material';
import { useEffect } from 'react';
import AutocompletePetDropdownMenu from './AutocompletePetDrowndownMenu';
import './PetDropDownContainer.css';

const PetDropDownContainer = ({ shelterPets, setSelectedPet, location }) => {
    useEffect(() => {
        setSelectedPet(null);
    }, [location, setSelectedPet]);
    const PleaseSelectLocation = () => {
        return <div className="noLocation">Please select a location.</div>;
    };

    const allInformationAvailable = () => {
        return location && shelterPets != null && shelterPets?.length > 0;
    };

    const NotAllInformationDropDown = () => {
        return location ? <LinearProgress /> : <PleaseSelectLocation />;
    };
    return (
        <div className={'PetDropDown'}>
            {!allInformationAvailable() ? (
                <NotAllInformationDropDown />
            ) : (
                <AutocompletePetDropdownMenu
                    shelterPets={shelterPets}
                    setSelectedPet={setSelectedPet}
                    location={location}
                />
            )}
        </div>
    );
};

export default PetDropDownContainer;
