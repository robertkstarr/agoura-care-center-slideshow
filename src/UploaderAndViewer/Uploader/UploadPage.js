import React, { useEffect, useState } from 'react';
import PetDropDown from '../SharedTools/PetDropDown';
import { getAnimalImageURL } from '../../SlideShow/GetPetInfo/GetAnimalImageURL/GetAnimalImageURL';
import './UploadPage.css';
import UploaderComponent from './UploaderComponent';
import GetDropDownAnimals from '../SharedTools/GetDropDownAnimals';
import Login from '../Login/Login';
import { auth, database } from '../FirebaseConfigFiles/FirebaseConfig';
import { onValue, ref } from 'firebase/database';
import setDatabaseValue from '../FirebaseConfigFiles/setDatabaseValue';
import Contact from '../SharedTools/Contact';
import LocationDropDown from '../SharedTools/LocationDropDown';
import { Link } from 'react-router-dom';

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
        GetDropDownAnimals(location, 'ALL').then((animals) => {
            setShelterPets(animals);
        });

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
                <div className={'PetDropDownContainer'}>
                    <div className={'DropDownMenus'}>
                        <LocationDropDown setLocation={setLocation} />
                        <PetDropDown
                            shelterPets={shelterPets}
                            setSelectedPet={setSelectedPet}
                            location={location}
                        />
                    </div>
                    {selectedPet != null ? (
                        <img
                            alt={`${selectedPet.ANIMAL_NAME}`}
                            src={getAnimalImageURL(selectedPet.ANIMAL_ID)}
                        />
                    ) : (
                        ''
                    )}
                    {selectedPet != null ? (
                        <UploaderComponent animalId={selectedPet.ANIMAL_ID} />
                    ) : (
                        'Please select a pet'
                    )}
                </div>
            )}
            <Contact />
        </div>
    );
};

export default UploadPage;
