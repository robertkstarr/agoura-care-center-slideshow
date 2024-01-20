import React, {useEffect, useState} from "react";
import {FileUploader} from "react-drag-drop-files";
import "./UploaderComponent.css";
import FileProgressBar from "./FileProgressBar";
import {Button} from "@mui/material";

const UploaderComponent = ({animalId}) => {
    const [files, setFiles] = useState([]);
    const [submit, setSubmit] = useState(false);
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
        setSubmit(true);
        setTimeout(() => setSubmit(false), 500);
    };

    useEffect(() => {
        setFiles([]);
    }, [animalId]);

    return (
        <div className={"UploaderComponent"}>
            <FileUploader handleChange={handleChange} name="file" types={fileTypes} label={"Upload your pictures"}
                          multiple={true}/>
            <div className={"buttons"}>
                <Button sx={{m: 1.5}} variant={"contained"} onClick={handleSubmit}>Submit Files</Button>
                <Button sx={{m: 1.5}} variant={"contained"} onClick={() => setFiles([])}>Clear files</Button>
            </div>
            <div>
                <h3>Files to upload:</h3>
                {files.map((file, index) => <FileProgressBar key={index} file={file} index={index}
                                                             submit={submit} animalId={animalId}/>)}
            </div>

        </div>
    );
};

export default UploaderComponent;