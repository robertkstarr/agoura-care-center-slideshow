import { CircularProgress } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import getAnimalImageURL from '../getAnimalImageURL';
import './PetImage.css';
const PetImage = React.forwardRef(({ image, onClick }, ref) => {
    const [url, setUrl] = useState('');
    const [thumbnail, setThumbnail] = useState(null);
    const [width, setWidth] = useState(150);
    const [height, setHeight] = useState(null);
    useEffect(() => {
        setUrl('');
        const establishUrl = async () => {
            getAnimalImageURL(image, true).then((thumbnailUrl) => setThumbnail(thumbnailUrl));
            getAnimalImageURL(image).then((animalURL) => setUrl(animalURL));
        };

        const IMAGE_WIDTH_RATIO = Math.min(0.4, 400 / window.innerWidth);

        if (image?.imageHeight && image?.imageWidth) {
            const screenWidth = window.innerWidth;
            const screenHeight = window.innerHeight;

            const imageHeight = image.imageHeight;
            const imageWidth = image.imageWidth;

            if ((imageHeight * screenWidth) / imageWidth <= screenHeight) {
                setHeight(((imageHeight * screenWidth) / imageWidth) * IMAGE_WIDTH_RATIO);
                setWidth(((imageWidth * screenWidth) / imageWidth) * IMAGE_WIDTH_RATIO);
            } else {
                setHeight(((imageHeight * screenHeight) / imageHeight) * IMAGE_WIDTH_RATIO);
                setWidth(((imageWidth * screenHeight) / imageHeight) * IMAGE_WIDTH_RATIO);
            }
        } else {
            setHeight(null);
            setWidth(150);
        }

        establishUrl().catch(console.error);
    }, [image]);

    const DisplayImage = () => {
        if (url.includes('.mp4') || url.includes('.mov')) {
            return (
                <video height={height * 1.5} controls preload="metadata">
                    <source src={url} type="video/mp4" />
                </video>
            );
        } else {
            return (
                <LazyLoadImage
                    loading={'lazy'}
                    src={url.length > 0 ? url : null}
                    alt={'animal'}
                    effect={'blur'}
                    width={width}
                    height={height}
                    placeholderSrc={thumbnail}
                />
            );
        }
    };

    return (
        <>
            {url.length > 0 || thumbnail != null ? (
                <div ref={ref} onClick={onClick} className={'PetImage'}>
                    <DisplayImage />
                </div>
            ) : (
                <CircularProgress />
            )}
        </>
    );
});

export default PetImage;
