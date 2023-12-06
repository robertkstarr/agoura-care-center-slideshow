import React, {useEffect, useState} from "react";
import "./PetImage.css";
import {LazyLoadImage} from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import loadingGif from "../../Images/loadingDial.gif";
import getAnimalImageURL from "./getAnimalImageURL";

const PetImage = ({image}) => {
    const [url, setUrl] = useState("");
    const [thumbnail, setThumbnail] = useState(loadingGif);

    useEffect(() => {
        const establishUrl = async () => {
            getAnimalImageURL(image, true).then(
                (thumbnailUrl) =>
                    setThumbnail(thumbnailUrl ? thumbnailUrl : loadingGif)
            );
            getAnimalImageURL(image).then((animalURL) => setUrl(animalURL));
        };

        establishUrl().catch(console.error);
    }, [image]);

    return <div className={"PetImage"}><LazyLoadImage loading={"lazy"} src={url} alt={"animal"}
                                                      effect={"blur"}
                                                      placeholderSrc={thumbnail}/></div>;
};

export default PetImage;