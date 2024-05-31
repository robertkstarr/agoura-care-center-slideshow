import PetImage from '../../PetImage/PetImage';
import { getAnimalImageURL } from '../../GetPetInfo/GetAnimalImageURL/GetAnimalImageURL';
import PetInfo from '../PetInfo';
import Footer from '../../Footer/Footer';
import React from 'react';
import './PortraitView.css';
import Logo from '../../Header/Logo';

export const PortraitView = ({ currentPet, pickNewPet, location }) => {
    return (
        <div className={'PortraitView'}>
            <PetImage onClick={pickNewPet} imageURL={getAnimalImageURL(currentPet.ANIMAL_ID)} />
            <PetInfo pet={currentPet} />
            <Footer location={location} />
            <Logo />
        </div>
    );
};
