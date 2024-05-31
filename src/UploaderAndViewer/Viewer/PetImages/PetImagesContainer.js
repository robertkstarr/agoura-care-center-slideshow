import 'photoswipe/dist/photoswipe.css';

import React, { useEffect, useState } from 'react';
import { onValue, ref } from 'firebase/database';
import { database } from '../../FirebaseConfigFiles/FirebaseConfig';
import './PetImagesContainer.css';
import { Gallery } from 'react-photoswipe-gallery';
import PetImageItem from './PetImageItem';

const PetImagesContainer = ({ selectedPet }) => {
    const [images, setImages] = useState(null);

    useEffect(() => {
        setImages(null);

        if (selectedPet) {
            onValue(ref(database, `Public/${selectedPet.ANIMAL_ID}`), (snapshot) => {
                const value = snapshot.val();
                if (value != null && Object.keys(value).length > 0) {
                    setImages(
                        Object.keys(value)
                            .sort(
                                (a, b) => (value[b]?.uploadTime || 0) - (value[a]?.uploadTime || 0)
                            )
                            .map((image) => {
                                return value[image];
                            })
                    );
                }
            });
        }
    }, [selectedPet]);

    if (selectedPet && images) {
        return (
            <div className={'PetImagesContainer'} key={selectedPet}>
                <Gallery withDownloadButton={true} id={'shelter_pets'}>
                    {images.map((image, index) => {
                        return (
                            <PetImageItem image={image} index={index} key={'pet-image-' + index} />
                        );
                    })}
                </Gallery>
            </div>
        );
    } else if (selectedPet && images == null) {
        return <div>No user uploaded images currently available.</div>;
    } else {
        return <div>Please select a pet</div>;
    }
};

export default PetImagesContainer;
