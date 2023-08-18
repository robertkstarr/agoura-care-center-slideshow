import React from "react";
import {ageDisplay, capitalizeEveryWordOfString, weightDisplay} from "./DisplayTools";

const PetInfo = ({pet}) => {
    return (
        <div className={"PetInfo"}>
            <div data-testid={"ID Display"}>ID: {pet.ANIMAL_ID}</div>
            <div data-testid={"Sex Display"}>SEX: {pet.SEX}</div>
            <div data-testid={"Age Display"}>AGE: {ageDisplay(pet.YEARS_OLD, pet.MONTHS_OLD)}</div>
            <div data-testid={"Breed Display"}>BREED: {capitalizeEveryWordOfString(pet.BREED)}</div>
            <div data-testid={"Weight Display"}>WEIGHT: {weightDisplay(pet.WEIGHT)}</div>
        </div>
    );
};

export default PetInfo;