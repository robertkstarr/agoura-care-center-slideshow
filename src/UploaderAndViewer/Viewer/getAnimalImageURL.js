import { getDownloadURL, ref } from 'firebase/storage';
import { storage } from '../FirebaseConfigFiles/FirebaseConfig';

const FILE_EXTENSION = '_200x200.';
const getAnimalImageURLFromFilenameAndId = async (filename, animalId, thumbnail = false) => {
    const thumbnailFolder = thumbnail ? 'Thumbnails/' : '';
    const originalExtension = filename.split('.').pop();
    const originalFilename = filename.replace('.' + originalExtension, '');

    const updatedFilename = thumbnail
        ? originalFilename + FILE_EXTENSION + originalExtension
        : filename;
    return getDownloadURL(ref(storage, `${animalId}/${thumbnailFolder}${updatedFilename}`));
};

const getAnimalImageURL = (image, thumbnail = false) => {
    if (thumbnail && (image?.fileName === undefined || image?.animalId === undefined)) {
        return Promise.resolve(null);
    } else if (
        image?.fileName !== undefined &&
        image?.animalId !== undefined &&
        !image?.fileName.includes('mp4')
    ) {
        return getAnimalImageURLFromFilenameAndId(image.fileName, image.animalId, thumbnail);
    } else if (image?.url !== undefined) {
        return Promise.resolve(image.url);
    } else {
        return '';
    }
};

export default getAnimalImageURL;
