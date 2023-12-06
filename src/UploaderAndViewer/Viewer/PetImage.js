import React, {useEffect, useState} from "react";
import "./PetImage.css";
import {LazyLoadImage} from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import loadingGif from "../../Images/loadingDial.gif";
import getAnimalImageURL from "./getAnimalImageURL";

const PetImage = ({image}) => {
    const [url, setUrl] = useState("");
    const [thumbnail, setThumbnail] = useState(loadingGif);
    const [width, setWidth] = useState(null);
    const [height, setHeight] = useState(null);

    const IMAGE_WIDTH_RATIO = .9;

    useEffect(() => {
        const establishUrl = async () => {
            getAnimalImageURL(image, true).then(
                (thumbnailUrl) =>
                    setThumbnail(thumbnailUrl)
            );
            getAnimalImageURL(image).then((animalURL) => setUrl(animalURL));
        };

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
        <div className={"PetImage"}>
            <LazyLoadImage loading={"lazy"} src={url} alt={"animal"}
                           effect={"blur"} width={width} height={height}
                           placeholderSrc={thumbnail}/>
        </div>
    );
};

export default PetImage;