import React from "react";
import "./PetImage.css";

const PetImage = ({url}) => {

    return <div className={"PetImage"}><img src={url} alt={"animal"}/></div>;
};

export default PetImage;