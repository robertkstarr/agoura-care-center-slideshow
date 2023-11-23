import React, {useEffect, useState} from "react";
import "./FileProgressBar.css";
import ProgressBar from "react-bootstrap/ProgressBar";
import {handleUpload} from "./handleUpload";

const FileProgressBar = ({file, index, animalId, submit}) => {
    const [percent, setPercent] = useState(0);

    useEffect(() => {
        if (percent === 0 && submit) {
            handleUpload(file, setPercent, animalId);
        }
    }, [file, percent, submit]);

    return (
        <div key={index} className={"ProgressBar"}>
            <div className={"FileName"}>{file.name}</div>
            <ProgressBar animated now={percent} striped variant={"success"}/>
        </div>
    );
};

export default FileProgressBar;