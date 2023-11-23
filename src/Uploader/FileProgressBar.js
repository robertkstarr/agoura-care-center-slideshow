import React, {useEffect, useState} from "react";
import "./FileProgressBar.css";
import ProgressBar from "react-bootstrap/ProgressBar";
import {handleUpload} from "./handleUpload";

const FileProgressBar = ({file, index}) => {
    const [percent, setPercent] = useState(0);

    useEffect(() => {
        if (percent === 0) {
            console.log(`Uploading ${file.name}`);
            handleUpload(file, setPercent);
        }
    }, [file, percent]);

    return (
        <div key={index} className={"ProgressBar"}>
            <div className={"FileName"}>{file.name}</div>
            <ProgressBar now={percent}/>
        </div>
    );
};

export default FileProgressBar;