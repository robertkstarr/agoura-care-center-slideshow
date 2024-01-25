import {GetPetInfo} from "../../SlideShow/GetPetInfo/GetPetInfo";

const GetDropDownAnimals = async (location = "ALL") => {
    return GetPetInfo(location).then((unmodifiedAnimalInfo) => {
        const cleanedAnimals = [];

        unmodifiedAnimalInfo[0]["animals"].forEach((animal) => {
            cleanedAnimals.push(animal);
        });
        return cleanedAnimals;
    });
};

export default GetDropDownAnimals;