import React, {useEffect, useState} from "react";
import "./ViewerPage.css";
import PetDropDown from "../SharedTools/PetDropDown";
import PetImagesContainer from "./PetImagesContainer";
import FilterAnimalsWithAvailablePictures from "./FilterAnimalsWithAvailablePictures";
import Login from "../Login/Login";
import {auth} from "../FirebaseConfigFiles/FirebaseConfig";
import "../Uploader/UploadPage.css";

const ViewerPage = () => {
    const [selectedPet, setSelectedPet] = useState("");
    const [shelterPets, setShelterPets] = useState([]);
    const [signedIn, setSignedIn] = useState(false);

    useEffect(() => {
        FilterAnimalsWithAvailablePictures().then((filteredAnimals) => setShelterPets(filteredAnimals));
        auth.onAuthStateChanged(
            () => {
                if (auth.currentUser) {
                    setSignedIn(true);
                } else {
                    setSignedIn(false);
                }
            }
        );
    }, []);

    return (
        <div className={"ViewerPage"}>
            <Login/>
            {signedIn && (
                <div className={"PetDropDownContainer"}>
                    <PetDropDown shelterPets={shelterPets} setSelectedPet={setSelectedPet}/>
                    <PetImagesContainer selectedPet={selectedPet}/>
                </div>)}
        </div>);
};

export default ViewerPage;