import React, {useState} from "react";
import "./ViewerPage.css";
import PetDropDown from "../Uploader/PetDropDown";
import PetImagesHolder from "./PetImagesHolder";

const ViewerPage = () => {
    const [selectedPet, setSelectedPet] = useState("");
    return (
        <div className={"ViewerPage"}>
            <PetDropDown setSelectedPet={setSelectedPet}/>
            <PetImagesHolder selectedPet={selectedPet}/>
        </div>);
};

export default ViewerPage;