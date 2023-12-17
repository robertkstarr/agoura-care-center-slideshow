import React, {useState} from "react";

const PetImage = ({imageURL, onClick}) => {
    const [error, setError] = useState(false);

    if (imageURL && imageURL.length > 0 && !error) {
        return (
            <img src={imageURL} onClick={onClick} className="PetImage" alt="Pet"
                 data-testid="Pet Image" onError={() => {
                setError(true);
            }}/>
        );
    } else if (error) {
        return (<div className="PetImage" data-testid={"No Image"}>No Image Available.</div>);
    } else {
        return (<div>Loading...</div>);
    }
};

export default PetImage;