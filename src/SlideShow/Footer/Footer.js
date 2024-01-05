import React from "react";
import {AGOURA, BALDWIN, CARSON, CASTAIC, DOWNEY, LANCASTER, PALMDALE} from "../../App";
import AgouraFooter from "./LocationFooters/AgouraFooter";
import DowneyFooter from "./LocationFooters/DowneyFooter";
import BaldwinFooter from "./LocationFooters/BaldwinFooter";
import CarsonFooter from "./LocationFooters/CarsonFooter";
import CastaicFooter from "./LocationFooters/CastaicFooter";
import LancasterFooter from "./LocationFooters/LancasterFooter";
import PalmdaleFooter from "./LocationFooters/PalmdaleFooter";
import "./Footer.css";

const Footer = ({location}) => {
    const locationFooter = () => {
        switch (location) {
            case AGOURA:
                return <AgouraFooter/>;
            case BALDWIN:
                return <BaldwinFooter/>;
            case CARSON:
                return <CarsonFooter/>;
            case CASTAIC:
                return <CastaicFooter/>;
            case DOWNEY:
                return <DowneyFooter/>;
            case LANCASTER:
                return <LancasterFooter/>;
            case PALMDALE:
                return <PalmdaleFooter/>;
            default:
                return <AgouraFooter/>;
        }
    };

    return (
        <div className={"footer"}>
            <div className={"CurrentlyAvailable"}>Currently available for adoption at the</div>
            {locationFooter()}
        </div>
    );
};

export default Footer;