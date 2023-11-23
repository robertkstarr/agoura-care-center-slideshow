import React from "react";

const PetImages = ({selectedPet}) => {
    if (selectedPet) {
        return (
            <div>{selectedPet.ANIMAL_NAME}</div>
        );
    } else {
        return (
            <div>
                Please select a pet.
            </div>
        );
    }
};

export default PetImages;