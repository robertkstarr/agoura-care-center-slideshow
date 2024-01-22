import React, {useEffect, useState} from "react";
import PetDropDown from "../SharedTools/PetDropDown";
import {getAnimalImageURL} from "../../SlideShow/GetPetInfo/GetAnimalImageURL/GetAnimalImageURL";
import "./UploadPage.css";
import UploaderComponent from "./UploaderComponent";
import GetDropDownAnimals from "../SharedTools/GetDropDownAnimals";
import Login from "../Login/Login";
import {auth, database} from "../FirebaseConfigFiles/FirebaseConfig";
import {onValue, ref} from "firebase/database";
import setDatabaseValue from "../FirebaseConfigFiles/setDatabaseValue";
import Contact from "../SharedTools/Contact";

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

    // eslint-disable-next-line
    const copyToPrivate = () => {
        onValue(ref(database), (snapshot) => {
            Object.entries(snapshot.val()).forEach((entry, index) => {
                if (entry[0] !== "Public") {
                    setDatabaseValue(`Public/${entry[0]}`, entry[1]);
                }
            });
        });
    };

    return (
        <div className={"UploadPage"}>
            <Login/>
            {signedIn && (<div className={"PetDropDownContainer"}><PetDropDown
                shelterPets={shelterPets}
                setSelectedPet={setSelectedPet}
            />
                {selectedPet ? <img alt={`${selectedPet.ANIMAL_NAME}`}
                                    src={getAnimalImageURL(selectedPet.ANIMAL_ID)}/> : ""}
                {selectedPet ? <UploaderComponent animalId={selectedPet.ANIMAL_ID}/> : "Please select a pet"}
            </div>)}
            <Contact/>
        </div>

    );
};

export default UploadPage;