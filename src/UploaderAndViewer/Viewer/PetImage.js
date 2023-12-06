import React from "react";
import "./PetImage.css";
import {LazyLoadImage} from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import loadingGif from "../../Images/loadingDial.gif";

const PetImage = ({url, thumbnail}) => {
    return <div className={"PetImage"}><LazyLoadImage loading={"lazy"} src={url} alt={"animal"}
                                                      effect={"blur"}
                                                      placeholderSrc={thumbnail ? thumbnail : loadingGif}/></div>;
};

export default PetImage;