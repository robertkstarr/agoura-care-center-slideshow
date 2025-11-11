import 'photoswipe/dist/photoswipe.css';

import { onValue, ref } from 'firebase/database';
import { useEffect, useState } from 'react';
import { Gallery } from 'react-photoswipe-gallery';
import { database } from '../../FirebaseConfigFiles/FirebaseConfig';
import PetImage from './PetImage';
import PetImageItem from './PetImageItem';
import './PetImagesContainer.css';

const PetImagesContainer = ({ selectedPet }) => {
    const [images, setImages] = useState(null);
    const [videos, setVideos] = useState(null);

    useEffect(() => {
        setImages(null);

        if (selectedPet) {
            onValue(ref(database, `Public/${selectedPet.animalId}`), (snapshot) => {
                const value = snapshot.val();
                if (value != null && Object.keys(value).length > 0) {
                    setImages(
                        Object.keys(value)
                            .filter(
                                (x) =>
                                    !value[x]?.fileName.includes('mp4') &&
                                    !value[x].fileName.includes('mov')
                            )
                            .sort(
                                (a, b) => (value[b]?.uploadTime || 0) - (value[a]?.uploadTime || 0)
                            )
                            .map((image) => {
                                return value[image];
                            })
                    );

                    setVideos(
                        Object.keys(value)
                            .filter(
                                (x) =>
                                    value[x]?.fileName.includes('mp4') ||
                                    value[x]?.fileName.includes('mov')
                            )
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

    if (selectedPet && (images || videos)) {
        return (
            <div className={'PetImagesContainer'} key={selectedPet}>
                {videos && videos?.length > 0 && (
                    <>
                        <h2>Videos</h2>
                        <div className="videos">
                            {videos.map((image, index) => {
                                return (
                                    <PetImage
                                        onClick={() => {}}
                                        image={image}
                                        index={index}
                                        key={'pet-image-' + index}
                                    />
                                );
                            })}
                        </div>
                    </>
                )}
                {images && images?.length > 0 && (
                    <>
                        <h2>Images</h2>
                        <div className={'images'}>
                            <Gallery withDownloadButton={true} id={'shelter_pets'}>
                                {images.map((image, index) => {
                                    return (
                                        <PetImageItem
                                            image={image}
                                            index={index}
                                            key={'pet-image-' + index}
                                        />
                                    );
                                })}
                            </Gallery>
                        </div>
                    </>
                )}
            </div>
        );
    } else if (selectedPet && images == null) {
        return <div>No user uploaded images or videos currently available.</div>;
    } else {
        return <div>Please select a pet</div>;
    }
};

export default PetImagesContainer;
