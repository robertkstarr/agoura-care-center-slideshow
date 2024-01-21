import React, {useEffect, useState} from "react";
import {onValue, ref} from "firebase/database";
import {database} from "../FirebaseConfigFiles/FirebaseConfig";
import PetImage from "./PetImage";
import "./PetImagesContainer.css";
import {Box, Modal} from "@mui/material";

const PetImagesContainer = ({selectedPet}) => {
    const [images, setImages] = useState(null);
    const [open, setOpen] = useState(false);
    const [currentImageURL, setCurrentImageURL] = useState("");
    const [modalWidth, setModalWidth] = useState(200);

    const modalStyle = {
        display: "flex",
        justifyContent: "center",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        bgcolor: "background.paper",
        border: "2px solid #000",
        boxShadow: 24,
        // p: 4,
    };

    const selectImage = (image, width) => {
        setCurrentImageURL(image);
        setOpen(true);
        setModalWidth(width);
    };

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
                <div className={"PetImagesContainer"}>
                    <Modal open={open}
                           onClose={() => {
                               setOpen(false);
                           }}>
                        <Box sx={modalStyle}>
                            <img width={modalWidth} src={currentImageURL} alt={selectedPet.ANIMAL_NAME}/>
                        </Box>
                    </Modal>

                    {images.map((image, index) =>
                        <PetImage onClick={(image, width) => {
                            selectImage(image, width);
                        }} image={image} key={index}/>
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