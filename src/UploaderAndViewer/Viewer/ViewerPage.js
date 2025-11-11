import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../FirebaseConfigFiles/FirebaseConfig';
import Login from '../Login/Login';
import Contact from '../SharedTools/Contact';
import LocationDropDown from '../SharedTools/LocationDropDown';
import PetDropDownContainer from '../SharedTools/PetDropDown/PetDropDownContainer';
import '../Uploader/UploadPage.css';
import FilterAnimalsWithAvailablePictures from './FilterAnimalsWithAvailablePictures';
import PetImagesContainer from './PetImages/PetImagesContainer';
import './ViewerPage.css';

const ViewerPage = () => {
    const [selectedPet, setSelectedPet] = useState('');
    const [shelterPets, setShelterPets] = useState([]);
    const [signedIn, setSignedIn] = useState(false);
    const [location, setLocation] = useState('');

    useEffect(() => {
        auth.onAuthStateChanged(() => {
            if (auth.currentUser) {
                setSignedIn(true);
            } else {
                setSignedIn(false);
            }
        });
    }, []);

    useEffect(() => {
        FilterAnimalsWithAvailablePictures(location).then((filteredAnimals) =>
            setShelterPets(filteredAnimals)
        );
    }, [location]);

    return (
        <div className={'ViewerPage'}>
            <h1>Viewer Page</h1>
            <div>
                Click <Link to={`../upload`}>here</Link> to upload new photos
            </div>
            <Login />
            {signedIn && (
                <div className={'PetDropDownContainer'}>
                    <div className={'DropDownMenus'}>
                        <LocationDropDown setLocation={setLocation} />
                        <PetDropDownContainer
                            shelterPets={shelterPets}
                            setSelectedPet={setSelectedPet}
                            location={location}
                        />
                    </div>
                    {selectedPet && <PetImagesContainer selectedPet={selectedPet} />}
                </div>
            )}
            <Contact />
        </div>
    );
};

export default ViewerPage;
