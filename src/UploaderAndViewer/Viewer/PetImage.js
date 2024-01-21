import React, {useEffect, useState} from "react";
import "./PetImage.css";
import {LazyLoadImage} from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import loadingGif from "../../Images/loadingDial.gif";
import getAnimalImageURL from "./getAnimalImageURL";

const PetImage = ({image, onClick}) => {
    const [url, setUrl] = useState("");
    const [thumbnail, setThumbnail] = useState(loadingGif);
    const [width, setWidth] = useState(150);
    const [height, setHeight] = useState(null);

    useEffect(() => {
        const establishUrl = async () => {
            getAnimalImageURL(image, true).then(
                (thumbnailUrl) =>
                    setThumbnail(thumbnailUrl)
            );
            getAnimalImageURL(image).then((animalURL) => setUrl(animalURL));
        };

        const IMAGE_WIDTH_RATIO = Math.min(.4, 400 / window.innerWidth);

        if (image?.imageHeight && image?.imageWidth) {
            const screenWidth = window.innerWidth;
            const screenHeight = window.innerHeight;

            const imageHeight = image.imageHeight;
            const imageWidth = image.imageWidth;

            if (imageHeight * screenWidth / imageWidth <= screenHeight) {
                setHeight(imageHeight * screenWidth / imageWidth * IMAGE_WIDTH_RATIO);
                setWidth(imageWidth * screenWidth / imageWidth * IMAGE_WIDTH_RATIO);
            } else {
                setHeight(imageHeight * screenHeight / imageHeight * IMAGE_WIDTH_RATIO);
                setWidth(imageWidth * screenHeight / imageHeight * IMAGE_WIDTH_RATIO);
            }
        }


        establishUrl().catch(console.error);
    }, [image]);

    return (
        <div onClick={() => {
            const modalWidth = height != null ?
                Math.min(window.innerWidth * .9,
                    width * 3,
                    width * window.innerHeight / height * .9) :
                Math.min(window.innerWidth * .9, width * 3);
            onClick(url, modalWidth);
        }} className={"PetImage"}>
            <LazyLoadImage loading={"lazy"} src={url} alt={"animal"}
                           effect={"blur"} width={width} height={height}
                           placeholderSrc={thumbnail}/>
        </div>
    );
};

export default PetImage;