import {getDownloadURL, ref, uploadBytesResumable} from "firebase/storage";
import {storage} from "./FirebaseConfigFiles/FirebaseConfig";

export const handleUpload = (file, setPercent) => {
    // progress can be paused and resumed. It also exposes progress updates.
    // Receives the storage reference and the file to upload.]
    const storageRef = ref(storage, `/files/${file.name}`);
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
                console.log(url);
            });
        });

};