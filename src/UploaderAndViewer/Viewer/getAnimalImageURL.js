import {storage} from "../FirebaseConfigFiles/FirebaseConfig";
import {getDownloadURL, ref} from "firebase/storage";

const getAnimalImageURLFromFilenameAndId = async (filename, animalId) => {
    return getDownloadURL(ref(storage, `${animalId}/${filename}`));
};


const getAnimalImageURL = (image) => {
    if (image?.fileName !== undefined && image?.animalId !== undefined) {
        return getAnimalImageURLFromFilenameAndId(image.fileName, image.animalId);
    } else if (image?.url !== undefined) {
        return Promise.resolve(image.url);
    } else {
        return "";
    }
};

export default getAnimalImageURL;