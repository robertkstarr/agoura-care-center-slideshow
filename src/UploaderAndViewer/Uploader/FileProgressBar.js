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
    }, [file, percent, submit, animalId]);

    const returnProgressBar = () => {
        if (percent === 100) {
            return <ProgressBar now={100} variant={"success"}/>;
        } else {
            return <ProgressBar animated now={percent} striped variant={"success"}/>;
        }
    };
    return (
        <div key={index} className={"ProgressBar"}>
            <div className={"FileName"}>{file.name}</div>
            {returnProgressBar()}
        </div>
    );
};

export default FileProgressBar;