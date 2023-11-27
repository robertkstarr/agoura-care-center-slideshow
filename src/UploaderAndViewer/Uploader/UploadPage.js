import React, {useEffect, useState} from "react";
import PetDropDown from "../SharedTools/PetDropDown";
import {getAnimalImageURL} from "../../SlideShow/GetPetInfo/GetAnimalImageURL/GetAnimalImageURL";
import "./UploadPage.css";
import UploaderComponent from "./UploaderComponent";
import GetDropDownAnimals from "../SharedTools/GetDropDownAnimals";

const UploadPage = () => {
    const [selectedPet, setSelectedPet] = useState();
    const [shelterPets, setShelterPets] = useState([]);

    useEffect(() => {
        GetDropDownAnimals().then((animals) => setShelterPets(animals));
    }, []);

    return (
        <div className={"UploadPage"}>
            <PetDropDown
                shelterPets={shelterPets}
                setSelectedPet={setSelectedPet}
            />
            {selectedPet ? <img alt={`${selectedPet.ANIMAL_NAME}`}
                                src={getAnimalImageURL(selectedPet.ANIMAL_ID)}/> : ""}
            {selectedPet ? <UploaderComponent animalId={selectedPet.ANIMAL_ID}/> : "Please select a pet"}
        </div>
    );
};

export default UploadPage;