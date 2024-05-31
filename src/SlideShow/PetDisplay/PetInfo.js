import React from 'react';
import {
    ageDisplay,
    capitalizeEveryWordOfString,
    shouldDisplayAge,
    shouldDisplayWeight,
    weightDisplay,
} from './DisplayTools';

const PetInfo = ({ pet }) => {
    return (
        <div className={'PetInfo'}>
            <div data-testid={'ID Display'}>ID: {pet.ANIMAL_ID}</div>
            {pet.SEX !== 'N/A' && <div data-testid={'Sex Display'}>Sex: {pet.SEX}</div>}
            {shouldDisplayAge(pet) && <div data-testid={'Age Display'}>Age: {ageDisplay(pet)}</div>}
            <div data-testid={'Breed Display'}>Breed: {capitalizeEveryWordOfString(pet.BREED)}</div>
            {shouldDisplayWeight(pet.WEIGHT) && (
                <div data-testid={'Weight Display'}>Weight: {weightDisplay(pet.WEIGHT)}</div>
            )}
        </div>
    );
};

export default PetInfo;
