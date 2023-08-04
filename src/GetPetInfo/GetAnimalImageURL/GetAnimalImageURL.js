export const getAnimalImageURL = (animalId) => {
    const BASE_URL = "https://api.lacounty.gov/data/acc/animal_images/"
    const FILE_EXTENSION = ".jpg"
    const petURL = BASE_URL + animalId + FILE_EXTENSION;

    return petURL;
}
