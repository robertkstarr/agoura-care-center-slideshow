import { get, ref } from 'firebase/database';
import { database } from '../FirebaseConfigFiles/FirebaseConfig';

const GetDropDownAnimals = async (location = 'Agoura', status = 'RTGH') => {
    const cleanedAnimals = [];
    await get(ref(database, `Public/CurrentAnimals/${location}`)).then((snapshot) => {
        Object.keys(snapshot.val()).forEach((animal) => {
            cleanedAnimals.push(snapshot.val()[animal]);
        });
    });

    return cleanedAnimals;
};

export default GetDropDownAnimals;
