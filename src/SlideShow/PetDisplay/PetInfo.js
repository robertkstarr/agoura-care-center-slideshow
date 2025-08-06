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
            <div data-testid={'ID Display'}>ID: {pet.animalId}</div>
            {pet.SEX !== 'N/A' && <div data-testid={'Sex Display'}>Sex: {pet.sex}</div>}
            {shouldDisplayAge(pet) && <div data-testid={'Age Display'}>Age: {ageDisplay(pet)}</div>}
            <div data-testid={'Breed Display'}>Breed: {capitalizeEveryWordOfString(pet.breed)}</div>
            {shouldDisplayWeight(pet.weight) && (
                <div data-testid={'Weight Display'}>Weight: {weightDisplay(pet.weight)}</div>
            )}
        </div>
    );
};

export default PetInfo;
