import {Autocomplete, TextField} from "@mui/material";
import "./PetDropDown.css";

const PetDropDown = ({shelterPets, setSelectedPet}) => {

    const createAnimalLabel = (animal) => {
        return `${animal.ANIMAL_NAME} - ${animal.BREED} (${animal.ANIMAL_ID})`;
    };

    if (shelterPets.length === 0) {
        return (<div className={"Loading"}>Loading...</div>);
    } else {
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
                    }}/>
            </div>
        );
    }
};

export default PetDropDown;