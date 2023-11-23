import React, {useState} from "react";
import "./ViewerPage.css";
import PetDropDown from "../Uploader/PetDropDown";
import PetImages from "./PetImages";

const ViewerPage = () => {
    const [selectedPet, setSelectedPet] = useState("");
    return (
        <div className={"ViewerPage"}>
            <PetDropDown setSelectedPet={setSelectedPet}/>
            <PetImages selectedPet={selectedPet}/>
        </div>);
};

export default ViewerPage;