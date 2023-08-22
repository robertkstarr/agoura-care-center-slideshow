import animalCareCenter from "../Resources/animalCareCenter.png";
import React from "react";

const Logo = () => {
    return (
        <div className="logo">
            <img alt={"Animal Care Center Logo"} src={animalCareCenter}/>
        </div>
    );
};

export default Logo;