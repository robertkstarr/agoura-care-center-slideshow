import React, {useState} from "react";
import UploaderComponent from "./UploaderComponent";
import PetDropDown from "./PetDropDown";

const UploadPage = () => {
    const [selectedPet, setSelectedPet] = useState();

    return (
        <div>
            {selectedPet ? `Selected Pet is ${selectedPet.ANIMAL_ID}` : ""}
            <PetDropDown
                setSelectedPet={setSelectedPet}
            />
            <UploaderComponent/>
        </div>
    );
};

export default UploadPage;