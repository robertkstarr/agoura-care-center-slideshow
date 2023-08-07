import React from "react";
import PetImage from "../PetImage/PetImage";
import PetInfo from "./PetInfo";
import {getAnimalImageURL} from "../GetPetInfo/GetAnimalImageURL/GetAnimalImageURL";
import "./PetDisplay.css"
import {capitalizeEveryWordOfString} from "./DisplayTools";

const PetDisplay = ({currentPet}) => {
    if (currentPet) {
        const currentPetImageURL = getAnimalImageURL(currentPet.ANIMAL_ID);

        return (
            <div className={"PetDisplay"}>
                <div className={"PetName"}> {capitalizeEveryWordOfString(currentPet.ANIMAL_NAME)}</div>
                <PetImage imageURL={currentPetImageURL}/>
                <PetInfo pet={currentPet}/>
            </div>)
    } else {
        return (<div>Loading</div>)
    }
}

export default PetDisplay;