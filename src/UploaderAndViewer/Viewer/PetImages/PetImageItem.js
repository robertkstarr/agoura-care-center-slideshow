import React, { useEffect, useState } from 'react';
import { Item } from 'react-photoswipe-gallery';
import getAnimalImageURL from '../getAnimalImageURL';
import PetImage from './PetImage';

const PetImageItem = ({ image, index }) => {
    const [imageURL, setImageURL] = useState(null);
    useEffect(() => {
        getAnimalImageURL(image).then((animalURL) => setImageURL(animalURL));
    }, [image]);

    return (
        <Item
            id={index}
            original={imageURL}
            height={image.height}
            width={image.width}
            key={'Item' + index}
        >
            {({ open, ref }) => <PetImage onClick={open} image={image} key={index} ref={ref} />}
        </Item>
    );
};

export default PetImageItem;
