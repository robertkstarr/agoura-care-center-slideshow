import React, {useEffect, useState} from "react";
import "./ViewerPage.css";
import PetDropDown from "../SharedTools/PetDropDown";
import PetImagesHolder from "./PetImagesHolder";
import GetDropDownAnimals from "../SharedTools/GetDropDownAnimals";

const ViewerPage = () => {
    const [selectedPet, setSelectedPet] = useState("");
    const [shelterPets, setShelterPets] = useState([]);

    useEffect(() => {
        GetDropDownAnimals().then((animals) => setShelterPets(animals));
    }, []);

    return (
        <div className={"ViewerPage"}>
            <PetDropDown shelterPets={shelterPets} setSelectedPet={setSelectedPet}/>
            <PetImagesHolder selectedPet={selectedPet}/>
        </div>);
};

export default ViewerPage;