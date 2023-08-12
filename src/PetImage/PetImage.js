import React from "react";

export const PetImage = ({imageURL, onClick}) => {
    if (imageURL && imageURL.length > 0) {
        return (<img src={imageURL} onClick={onClick} className="Pet Image" alt="Pet" data-testid="Pet Image"/>);
    } else {
        return (<div>Loading...</div>)
    }
}

export default PetImage;