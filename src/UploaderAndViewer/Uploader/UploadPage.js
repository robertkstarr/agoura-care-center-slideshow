import React, {useState} from "react";
import PetDropDown from "./PetDropDown";
import {getAnimalImageURL} from "../../SlideShow/GetPetInfo/GetAnimalImageURL/GetAnimalImageURL";
import "./UploadPage.css";
import UploaderComponent from "./UploaderComponent";

const UploadPage = () => {
    const [selectedPet, setSelectedPet] = useState();

    return (
        <div className={"UploadPage"}>
            <PetDropDown
                setSelectedPet={setSelectedPet}
            />
            {selectedPet ? <img alt={`${selectedPet.ANIMAL_NAME}`}
                                src={getAnimalImageURL(selectedPet.ANIMAL_ID)}/> : ""}
            {selectedPet ? <UploaderComponent animalId={selectedPet.ANIMAL_ID}/> : "Please select a pet"}
        </div>
    );
};

export default UploadPage;