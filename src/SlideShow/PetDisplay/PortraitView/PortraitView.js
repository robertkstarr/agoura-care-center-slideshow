import Footer from '../../Footer/Footer';
import { getAnimalImageURL } from '../../GetPetInfo/GetAnimalImageURL/GetAnimalImageURL';
import Logo from '../../Header/Logo';
import PetImage from '../../PetImage/PetImage';
import PetInfo from '../PetInfo';
import './PortraitView.css';

export const PortraitView = ({ currentPet, pickNewPet, location }) => {
    return (
        <div className={'PortraitView'}>
            <PetImage onClick={pickNewPet} imageURL={getAnimalImageURL(currentPet.animalId)} />
            <PetInfo pet={currentPet} />
            <Footer location={location} />
            <Logo />
        </div>
    );
};
