import React from "react";
import PetImage from "../PetImage/PetImage";
import PetInfo from "./PetInfo";
import {getAnimalImageURL} from "../GetPetInfo/GetAnimalImageURL/GetAnimalImageURL";

const PetDisplay = ({currentPet}) => {
    if (currentPet) {
        const currentPetImageURL = getAnimalImageURL(currentPet.ANIMAL_ID);
        
        return (<div className={"Pet Display"}>
            <div className={"Pet Name"}> {currentPet.ANIMAL_NAME}</div>
            <PetImage imageURL={currentPetImageURL}/>
            <PetInfo pet={currentPet}/>
        </div>)
    } else {
        return (<div>Loading</div>)
    }
}

export default PetDisplay;