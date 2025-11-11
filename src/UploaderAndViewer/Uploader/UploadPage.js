import { onValue, ref } from 'firebase/database';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAnimalImageURL } from '../../SlideShow/GetPetInfo/GetAnimalImageURL/GetAnimalImageURL';
import { auth, database } from '../FirebaseConfigFiles/FirebaseConfig';
import setDatabaseValue from '../FirebaseConfigFiles/setDatabaseValue';
import Login from '../Login/Login';
import Contact from '../SharedTools/Contact';
import GetDropDownAnimals from '../SharedTools/GetDropDownAnimals';
import LocationDropDown from '../SharedTools/LocationDropDown';
import PetDropDownContainer from '../SharedTools/PetDropDown/PetDropDownContainer';
import PetImagesContainer from '../Viewer/PetImages/PetImagesContainer';
import './UploadPage.css';
import UploaderComponent from './UploaderComponent';

const UploadPage = () => {
    const [selectedPet, setSelectedPet] = useState();
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
        setShelterPets(null);
        if (location != null && location.length > 0) {
            GetDropDownAnimals(location, 'ALL').then((animals) => {
                if (animals.length > 0) {
                    setShelterPets(animals);
                }
            });
        }
        setSelectedPet(null);
    }, [location]);

    // eslint-disable-next-line
    const copyToPrivate = () => {
        onValue(ref(database), (snapshot) => {
            Object.entries(snapshot.val()).forEach((entry, index) => {
                if (entry[0] !== 'Public') {
                    setDatabaseValue(`Public/${entry[0]}`, entry[1]);
                }
            });
        });
    };

    return (
        <div className={'UploadPage'}>
            <h1>Upload Page</h1>
            <div>
                Click <Link to={`../view`}>here</Link> to view available photos
            </div>
            <Login />
            {signedIn && (
                <>
                    <div className={'PetDropDownContainer'}>
                        <div className={'DropDownMenus'}>
                            <LocationDropDown setLocation={setLocation} />
                            <PetDropDownContainer
                                shelterPets={shelterPets}
                                setSelectedPet={setSelectedPet}
                                location={location}
                            />
                        </div>
                        {selectedPet != null ? (
                            <img
                                alt={`${selectedPet.ANIMAL_NAME}`}
                                src={getAnimalImageURL(
                                    selectedPet.animalId,
                                    selectedPet.imageCount
                                )}
                            />
                        ) : (
                            ''
                        )}
                        {selectedPet != null ? (
                            <UploaderComponent animalId={selectedPet.animalId} />
                        ) : (
                            'Please select a pet'
                        )}
                    </div>
                    {selectedPet && <PetImagesContainer selectedPet={selectedPet} />}
                </>
            )}
            <Contact />
        </div>
    );
};

export default UploadPage;
