import Obfuscate from 'react-obfuscate';
import Footer from '../../Footer/Footer';
import { getAnimalImageURL } from '../../GetPetInfo/GetAnimalImageURL/GetAnimalImageURL';
import Logo from '../../Header/Logo';
import PetImage from '../../PetImage/PetImage';
import PetInfo from '../PetInfo';
import './LandscapeView.css';

export const LandscapeView = ({ currentPet, pickNewPet, location }) => {
    return (
        <div className={'LandscapeView'}>
            <div className={'LeftAndRightSides'}>
                <div className={'LeftSide'}>
                    <PetImage
                        onClick={pickNewPet}
                        imageURL={getAnimalImageURL(currentPet.animalId, currentPet.imageCount)}
                    />
                </div>
                <div className={'RightSide'}>
                    <PetInfo pet={currentPet} />
                    <Footer location={location} />
                </div>
            </div>

            <Logo />
            <div className="technical">
                If you notice any issues with this display, please email:{' '}
                <Obfuscate email="robert@robertkstarr.com" />
            </div>
        </div>
    );
};

export default LandscapeView;
