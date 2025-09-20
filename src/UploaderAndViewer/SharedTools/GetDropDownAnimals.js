import { onValue, ref } from 'firebase/database';
import { database } from '../FirebaseConfigFiles/FirebaseConfig';

const GetDropDownAnimals = async (location = 'Agoura', status = 'RTGH') => {
    const animalRef = ref(database, `Public/CurrentAnimals/${location}`);
    const cleanedAnimals = [];

    onValue(animalRef, (snapshot) => {
        Object.keys(snapshot.val()).forEach((animal) => {
            cleanedAnimals.push(snapshot.val()[animal]);
        });
    });

    return cleanedAnimals;
};

export default GetDropDownAnimals;
