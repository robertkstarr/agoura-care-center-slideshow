import React, {useEffect, useState} from "react";
import "./ViewerPage.css";
import PetDropDown from "../SharedTools/PetDropDown";
import PetImagesContainer from "./PetImagesContainer";
import FilterAnimalsWithAvailablePictures from "./FilterAnimalsWithAvailablePictures";
import Login from "../Login/Login";
import {auth} from "../FirebaseConfigFiles/FirebaseConfig";
import "../Uploader/UploadPage.css";
import Contact from "../SharedTools/Contact";
import LocationDropDown from "../SharedTools/LocationDropDown";

const ViewerPage = () => {
    const [selectedPet, setSelectedPet] = useState("");
    const [shelterPets, setShelterPets] = useState([]);
    const [signedIn, setSignedIn] = useState(false);
    const [location, setLocation] = useState("ALL");

    useEffect(() => {
        FilterAnimalsWithAvailablePictures(location).then((filteredAnimals) => setShelterPets(filteredAnimals));
        auth.onAuthStateChanged(
            () => {
                if (auth.currentUser) {
                    setSignedIn(true);
                } else {
                    setSignedIn(false);
                }
            }
        );
    }, [location, selectedPet]);

    return (
        <div className={"ViewerPage"}>
            <Login/>
            {signedIn && (
                <div className={"PetDropDownContainer"}>
                    <div className={"DropDownMenus"}>
                        <LocationDropDown setLocation={setLocation}/>
                        <PetDropDown shelterPets={shelterPets} setSelectedPet={setSelectedPet} location={location}/>
                    </div>
                    <PetImagesContainer selectedPet={selectedPet}/>
                </div>)}
            <Contact/>
        </div>);
};

export default ViewerPage;