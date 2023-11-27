import React, {useEffect, useState} from "react";
import "./ViewerPage.css";
import PetDropDown from "../SharedTools/PetDropDown";
import PetImagesHolder from "./PetImagesHolder";
import {FilterAnimalsWithAvailablePictures} from "./FilterAnimalsWithAvailablePictures";


const ViewerPage = () => {
    const [selectedPet, setSelectedPet] = useState("");
    const [shelterPets, setShelterPets] = useState([]);

    useEffect(() => {
        FilterAnimalsWithAvailablePictures().then((filteredAnimals) => setShelterPets(filteredAnimals));
    }, []);

    return (
        <div className={"ViewerPage"}>
            <PetDropDown shelterPets={shelterPets} setSelectedPet={setSelectedPet}/>
            <PetImagesHolder selectedPet={selectedPet}/>
        </div>);
};

export default ViewerPage;