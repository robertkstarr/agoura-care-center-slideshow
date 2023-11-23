import React, {useState} from "react";
import {FileUploader} from "react-drag-drop-files";
import "./UploaderComponent.css";
import FileProgressBar from "./FileProgressBar";

const UploaderComponent = () => {
    // State to store uploaded file
    const [files, setFiles] = useState([]);
    const [submitting, setSubmitting] = useState(false);
    const fileTypes = ["JPG", "PNG", "GIF", "JPEG"];

    const handleChange = (newFiles) => {
        const values = Object.keys(newFiles);
        const newFileArray = [];
        values.forEach((fileNumber) => {
            newFileArray.push(newFiles[fileNumber]);
        });
        setFiles(oldFiles => [...oldFiles, ...newFileArray]);
    };

    const handleSubmit = () => {
        setSubmitting(true);
    };

    return (
        <div className={"UploaderComponent"}>
            <FileUploader handleChange={handleChange} name="file" types={fileTypes} label={"Upload your pictures"}
                          multiple={true}/>
            <div>
                <h3>Files to upload:</h3>
                {files.map((file, index) => <FileProgressBar file={file} index={index} submitting={submitting}/>)}
            </div>
            <div className={"buttons"}>
                <button onClick={handleSubmit}>Submit Files</button>
                <button onClick={() => setFiles([])}>Clear files</button>
            </div>
        </div>
    );
};

export default UploaderComponent;