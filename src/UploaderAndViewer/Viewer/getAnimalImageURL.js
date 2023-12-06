import {storage} from "../FirebaseConfigFiles/FirebaseConfig";
import {getDownloadURL, ref} from "firebase/storage";

const getAnimalImageURLFromFilenameAndId = async (filename, animalId, thumbnail = false) => {
    const thumbnailFolder = thumbnail ? "thumbnail/" : "";
    return getDownloadURL(ref(storage, `${animalId}/${thumbnailFolder}${filename}`));
};

const getAnimalImageURL = (image, thumbnail = false) => {
    if (image?.fileName !== undefined && image?.animalId !== undefined) {
        return getAnimalImageURLFromFilenameAndId(image.fileName, image.animalId);
    } else if (image?.url !== undefined) {
        return Promise.resolve(image.url);
    } else {
        return "";
    }
};

export default getAnimalImageURL;