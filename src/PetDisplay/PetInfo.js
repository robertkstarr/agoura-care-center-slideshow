import React from 'react';
import {ageDisplay, capitalizeEveryWordOfString} from "./DisplayTools";

const PetInfo = ({pet}) => {
    return (
        <div className={"PetInfo"}>
            <div>ID: {pet.ANIMAL_ID}</div>
            <div>SEX: {pet.SEX}</div>
            <div>AGE: {ageDisplay(pet.YEARS_OLD, pet.MONTHS_OLD)}</div>
            <div>BREED: {capitalizeEveryWordOfString(pet.BREED)}</div>
            <div>WEIGHT: {pet.WEIGHT} lbs.</div>
        </div>
    )
};

export default PetInfo;