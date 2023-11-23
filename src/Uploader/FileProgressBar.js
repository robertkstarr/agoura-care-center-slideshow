import React from "react";
import "./FileProgressBar.css";
import ProgressBar from "react-bootstrap/ProgressBar";

const FileProgressBar = ({file, index}) => {
    return (
        <div key={index} className={"ProgressBar"}>
            <div className={"FileName"}>{file.name}</div>
            <ProgressBar now={60}/>
        </div>
    );
};

export default FileProgressBar;