import {get, ref} from "firebase/database";
import {database} from "../FirebaseConfigFiles/FirebaseConfig";
import GetDropDownAnimals from "../SharedTools/GetDropDownAnimals";

const IDAvailable = async (animalID) => {
    const snapshot = await get(ref(database, animalID));
    if (snapshot.val() != null) {
        return true;
    } else {
        return false;
    }

};

export const FilterAnimalsWithAvailablePictures = async () => {
    const animals = await GetDropDownAnimals();
    const promises = animals.map(async (animal) => ({
        animal: animal,
        idAvailable: await IDAvailable(animal.ANIMAL_ID)
    }));
    const fulfilledData = await Promise.all(promises);
    const filteredData = fulfilledData
        .filter((results) => results.idAvailable)
        .map(data => data.animal);

    return filteredData;
};