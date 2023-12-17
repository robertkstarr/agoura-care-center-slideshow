import React from "react";
import {AGOURA, DOWNEY} from "../../App";
import AgouraFooter from "./AgouraFooter";
import DowneyFooter from "./DowneyFooter";

const Footer = ({location}) => {
    const locationFooter = () => {
        switch (location) {
            case AGOURA:
                return <AgouraFooter/>;
            case DOWNEY:
                return <DowneyFooter/>;
            default:
                return <AgouraFooter/>;
        }
    };

    return (
        <div className={"footer"}>
            <div>Currently available for adoption at the</div>
            {locationFooter()}
        </div>
    );
};

export default Footer;