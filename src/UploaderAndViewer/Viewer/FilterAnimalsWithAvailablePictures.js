import GetDropDownAnimals from "../SharedTools/GetDropDownAnimals";
import IDAvailable from "./IDAvailable";

const FilterAnimalsWithAvailablePictures = async (location) => {
    const animals = await GetDropDownAnimals(location, "ALL");
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

export default FilterAnimalsWithAvailablePictures;