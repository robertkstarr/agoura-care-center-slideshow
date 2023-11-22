import React, {useState} from "react";
import {getDownloadURL, ref, uploadBytesResumable} from "firebase/storage";
import {storage} from "./FirebaseConfigFiles/FirebaseConfig";
import {FileUploader} from "react-drag-drop-files";


const UploaderComponent = () => {
    // State to store uploaded file
    const [file, setFile] = useState("");
    const fileTypes = ["JPG", "PNG", "GIF", "JPEG"];
    // progress
    const [percent, setPercent] = useState(0);

    // Handle file upload event and update state
    const handleChange = (file) => {
        setFile(file);
    };

    const handleUpload = () => {
        if (!file) {
            alert("Please upload an image first!");
        }

        const storageRef = ref(storage, `/files/${file.name}`);

        // progress can be paused and resumed. It also exposes progress updates.
        // Receives the storage reference and the file to upload.
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
            }
        );
    };

    return (
        <div>
            <FileUploader handleChange={handleChange} name="file" types={fileTypes} label={"Upload your pictures"}/>
            <button onClick={handleUpload}>Upload to Firebase</button>
            <p>{percent} "% done"</p>
        </div>
    );
};

export default UploaderComponent;