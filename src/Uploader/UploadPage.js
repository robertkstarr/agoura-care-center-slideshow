import React, {useState} from "react";
import UploaderComponent from "./UploaderComponent";
import PetDropDown from "./PetDropDown";

const UploadPage = () => {
    const [selectedPet, setSelectedPet] = useState("");

    return (
        <div>
            Selected Pet is {selectedPet}
            <PetDropDown
                setSelectedPet={setSelectedPet}
            />
            <UploaderComponent/>
        </div>
    );
};

export default UploadPage;