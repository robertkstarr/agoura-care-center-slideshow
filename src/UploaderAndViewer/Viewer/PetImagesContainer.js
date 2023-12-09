import React, {useEffect, useState} from "react";
import {onValue, ref} from "firebase/database";
import {database} from "../FirebaseConfigFiles/FirebaseConfig";
import PetImage from "./PetImage";
import "./PetImagesContainer.css";

const PetImagesContainer = ({selectedPet}) => {
    const [images, setImages] = useState(null);

    useEffect(() => {
        setImages(null);

        if (selectedPet) {
            onValue(ref(database, `Public/${selectedPet.ANIMAL_ID}`), (snapshot) => {
                const value = snapshot.val();
                if (value != null && Object.keys(value).length > 0) {
                    setImages(Object.keys(value).sort((a, b) =>
                        (value[b]?.uploadTime || 0) -
                        (value[a]?.uploadTime || 0)
                    ).map((image) => {
                        return value[image];
                    }));
                }
            });
        }
    }, [selectedPet]);

    if (selectedPet && images) {
        return (
            <div>
                <div>{selectedPet.ANIMAL_NAME}</div>
                <div className={"PetImagesContainer"}>
                    {images.map((image, index) =>
                        <PetImage image={image} key={index}/>
                    )
                    }
                </div>
            </div>
        );
    } else if (selectedPet && images == null) {
        return <div>No images currently available.</div>;
    } else {
        return (
            <div>
                Please select a pet.
            </div>
        );
    }
};

export default PetImagesContainer;