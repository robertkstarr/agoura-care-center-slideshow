import React, {useEffect, useState} from "react";
import "./ViewerPage.css";
import PetDropDown from "../SharedTools/PetDropDown";
import PetImagesHolder from "./PetImagesHolder";
import GetDropDownAnimals from "../SharedTools/GetDropDownAnimals";
import {get, ref} from "firebase/database";
import {database} from "../FirebaseConfigFiles/FirebaseConfig";

const ViewerPage = () => {
    const [selectedPet, setSelectedPet] = useState("");
    const [shelterPets, setShelterPets] = useState([]);

    const IDAvailable = async (animalID) => {
        const snapshot = await get(ref(database, animalID));
        if (snapshot.val() != null) {
            return true;
        } else {
            return false;
        }

    };

    const FilterAnimalsWithAvailablePictures = async (animals) => {
        const promises = animals.map(async (animal) => ({
            animal: animal,
            idAvailable: await IDAvailable(animal.ANIMAL_ID)
        }));
        const fulfilledData = await Promise.all(promises);
        const filteredData = fulfilledData
            .filter((results) => results.idAvailable)
            .map(data => data.animal);

        return filteredData;
    };

    useEffect(() => {
        GetDropDownAnimals().then((animals) => FilterAnimalsWithAvailablePictures(animals)).then((filteredAnimals) => setShelterPets(filteredAnimals));
    }, []);

    return (
        <div className={"ViewerPage"}>
            <PetDropDown shelterPets={shelterPets} setSelectedPet={setSelectedPet}/>
            <PetImagesHolder selectedPet={selectedPet}/>
        </div>);
};

export default ViewerPage;