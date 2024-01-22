import React from "react";
import {Divider} from "@mui/material";

const Contact = () => {
    return (
        <div className={"Contact"}>
            <Divider sx={{borderBottomWidth: 5, margin: "1rem", background: "black"}}/>
            <div>
                Questions, Comments, or Suggestions?
            </div>
            <div>Contact{" "}
                <a href={"https://docs.google.com/forms/d/e/1FAIpQLSdXoZP9Nnu5oqwoqCBtAPHme7nsRvkX1qM5pKZpEVubW0BfMg/viewform?usp=sf_link"}>
                    Robert Starr</a>
            </div>
        </div>
    );
};

export default Contact;