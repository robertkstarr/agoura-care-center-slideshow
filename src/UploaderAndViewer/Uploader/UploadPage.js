import React, {useEffect, useState} from "react";
import PetDropDown from "../SharedTools/PetDropDown";
import {getAnimalImageURL} from "../../SlideShow/GetPetInfo/GetAnimalImageURL/GetAnimalImageURL";
import "./UploadPage.css";
import UploaderComponent from "./UploaderComponent";
import GetDropDownAnimals from "../SharedTools/GetDropDownAnimals";
import Login from "../Login/Login";
import {auth} from "../FirebaseConfigFiles/FirebaseConfig";

const UploadPage = () => {
    const [selectedPet, setSelectedPet] = useState();
    const [shelterPets, setShelterPets] = useState([]);
    const [signedIn, setSignedIn] = useState(false);

    useEffect(() => {
        GetDropDownAnimals().then((animals) => setShelterPets(animals));
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
        <div className={"UploadPage"}>
            <Login/>
            {signedIn && (<div><PetDropDown
                shelterPets={shelterPets}
                setSelectedPet={setSelectedPet}
            />
                {selectedPet ? <img alt={`${selectedPet.ANIMAL_NAME}`}
                                    src={getAnimalImageURL(selectedPet.ANIMAL_ID)}/> : ""}
                {selectedPet ? <UploaderComponent animalId={selectedPet.ANIMAL_ID}/> : "Please select a pet"}
            </div>)}
        </div>

    );
};

export default UploadPage;