import React, {useCallback, useEffect, useState} from "react";
import "./FileProgressBar.css";
import ProgressBar from "react-bootstrap/ProgressBar";
import {getDownloadURL, ref, uploadBytesResumable} from "firebase/storage";
import {storage} from "./FirebaseConfigFiles/FirebaseConfig";

const FileProgressBar = ({file, index, submitting}) => {
    const [percent, setPercent] = useState(0);
    const handleUpload = useCallback(() => {
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
    }, [file]);


    useEffect(() => {
        console.log(submitting);
        if (submitting && percent === 0) {
            handleUpload();
        }
    }, [submitting, handleUpload, percent]);


    return (
        <div key={index} className={"ProgressBar"}>
            <div className={"FileName"}>{file.name}</div>
            <ProgressBar now={percent}/>
        </div>
    );
};

export default FileProgressBar;