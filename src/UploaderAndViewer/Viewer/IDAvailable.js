import { get, ref } from 'firebase/database';
import { database } from '../FirebaseConfigFiles/FirebaseConfig';

const IDAvailable = async (animalID) => {
    const snapshot = await get(ref(database, `Public/${animalID}`));
    if (snapshot.val() != null) {
        return true;
    } else {
        return false;
    }
};

export default IDAvailable;
