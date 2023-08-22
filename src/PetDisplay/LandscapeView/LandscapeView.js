import PetImage from "../../PetImage/PetImage";
import {getAnimalImageURL} from "../../GetPetInfo/GetAnimalImageURL/GetAnimalImageURL";
import PetInfo from "../PetInfo";
import Footer from "../../Footer/Footer";
import React from "react";
import "./LandscapeView.css";

export const LandscapeView = ({currentPet, pickNewPet}) => {
    return (<div className={"LandscapeView"}>
        <div className={"LeftSide"}>
            <PetImage onClick={pickNewPet} imageURL={getAnimalImageURL(currentPet.ANIMAL_ID)}/>
        </div>
        <div className={"RightSide"}>
            <PetInfo pet={currentPet}/>
            <Footer/>
        </div>
    </div>);
};

export default LandscapeView;