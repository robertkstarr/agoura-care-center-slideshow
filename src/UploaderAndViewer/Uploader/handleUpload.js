import {getDownloadURL, ref, uploadBytesResumable} from "firebase/storage";
import {storage} from "../FirebaseConfigFiles/FirebaseConfig";
import setDatabaseValue from "../FirebaseConfigFiles/setDatabaseValue";
import {Timestamp} from "firebase/firestore";

export const handleUpload = (file, setPercent, animalId) => {
    // progress can be paused and resumed. It also exposes progress updates.
    // Receives the storage reference and the file to upload.]
    const storageRef = ref(storage, `/${animalId}/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
        "state_changed",
        (snapshot) => {
            const percent = Math.round(
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );

            // update progress
            setPercent(percent);
        },
        (err) => console.log(err),
        () => {
            // download url
            getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                //TODO: Attach Username to database file
                const uploadTime = Timestamp.now().seconds;
                const uploadUser = "Not Recorded";
                setDatabaseValue(`${animalId}/${file.name.split(".")[0]}`, {url, uploadTime, uploadUser});
            });
        });

};