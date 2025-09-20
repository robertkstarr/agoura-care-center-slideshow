import { Autocomplete, TextField } from '@mui/material';

const AutocompletePetDropdownMenu = ({ shelterPets, setSelectedPet, location }) => {
    const createAnimalLabel = (animal) => {
        return `${animal['animalName']} - ${animal['breed']} (${animal.animalId})`;
    };

    return (
        <Autocomplete
            renderInput={(params) => <TextField {...params} label={`Selected Animal`} />}
            options={shelterPets.sort((a, b) => a['animalName'].localeCompare(b['animalName']))}
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
