import {GetPetInfo} from "../../SlideShow/GetPetInfo/GetPetInfo";

const GetDropDownAnimals = async () => {
    return GetPetInfo().then((unmodifiedAnimalInfo) => {
        const cleanedAnimals = [];

        unmodifiedAnimalInfo[0]["animals"].forEach((animal) => {
            cleanedAnimals.push(animal);
        });
        return cleanedAnimals;
    });
};

export default GetDropDownAnimals;