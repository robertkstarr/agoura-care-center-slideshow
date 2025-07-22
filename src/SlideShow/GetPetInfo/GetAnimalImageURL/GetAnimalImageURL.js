export const getAnimalImageURL = (animalId) => {
    const BASE_URL = 'https://daccanimalimagesprod.blob.core.windows.net/images/';
    const FILE_EXTENSION = '.jpg';
    const petURL = BASE_URL + animalId + FILE_EXTENSION;

    return petURL;
};
