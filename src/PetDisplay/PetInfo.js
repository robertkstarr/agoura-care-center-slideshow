import React from 'react';
import {capitalizeEveryWordOfString} from "./DisplayTools";

const PetInfo = ({pet}) => {
    return (
        <div className={"PetInfo"}>
            <div>ID: {pet.ANIMAL_ID}</div>
            <div>SEX: {pet.SEX}</div>
            <div>AGE: {pet.YEARS_OLD} years {pet.MONTHS_OLD.split(".")[0]} months</div>
            <div>BREED: {capitalizeEveryWordOfString(pet.BREED)}</div>
            <div>WEIGHT: {pet.WEIGHT} lbs.</div>
        </div>
    )
};

export default PetInfo;