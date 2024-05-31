import React, { useEffect, useState } from 'react';

const PetImage = ({ imageURL, onClick }) => {
    const [error, setError] = useState(false);

    useEffect(() => {
        setError(false);
    }, [imageURL]);

    if (imageURL && imageURL.length > 0 && !error) {
        return (
            <img
                src={imageURL}
                onClick={onClick}
                className="PetImage"
                alt="Pet"
                data-testid="Pet Image"
                onError={() => {
                    setError(true);
                }}
            />
        );
    } else if (error) {
        return (
            <div className="PetImage" data-testid={'No Image'} onClick={onClick}>
                No Image Available.
            </div>
        );
    } else {
        return <div>Loading...</div>;
    }
};

export default PetImage;
