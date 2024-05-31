import PetImage from '../../PetImage/PetImage';
import { getAnimalImageURL } from '../../GetPetInfo/GetAnimalImageURL/GetAnimalImageURL';
import PetInfo from '../PetInfo';
import Footer from '../../Footer/Footer';
import React from 'react';
import './LandscapeView.css';
import Logo from '../../Header/Logo';

export const LandscapeView = ({ currentPet, pickNewPet, location }) => {
    return (
        <div className={'LandscapeView'}>
            <div className={'LeftAndRightSides'}>
                <div className={'LeftSide'}>
                    <PetImage
                        onClick={pickNewPet}
                        imageURL={getAnimalImageURL(currentPet.ANIMAL_ID)}
                    />
                </div>
                <div className={'RightSide'}>
                    <PetInfo pet={currentPet} />
                    <Footer location={location} />
                </div>
            </div>
            <Logo />
        </div>
    );
};

export default LandscapeView;
