export const getAnimalImageURL = (animalId, imageNumber = 0) => {
    const BASE_URL = 'https://daccanimalimagesprod.blob.core.windows.net/images/';
    const FILE_EXTENSION = '.jpg';
    const IMAGE_NUMBER = imageNumber > 1 ? `-${imageNumber}` : '';
    const petURL = BASE_URL + animalId + IMAGE_NUMBER + FILE_EXTENSION;

    return petURL;
};
