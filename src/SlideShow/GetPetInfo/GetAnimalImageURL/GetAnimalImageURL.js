export const getAnimalImageURL = (animalId) => {
    const BASE_URL = "https://animalcare.lacounty.gov/media/catalog/product/a/"
    const FILE_EXTENSION = "_detail.jpg"
    const subFolder = `${animalId[1]}/`
    const petURL = BASE_URL + subFolder + animalId.toLowerCase() + FILE_EXTENSION;

    console.log(petURL);
    return petURL;
}
