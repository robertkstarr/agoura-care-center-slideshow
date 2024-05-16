import React from 'react';
import {Autocomplete, TextField} from "@mui/material";
import "./LocationDropDown.css";

import {LOCATIONS} from "../../Resources/LOCATIONS";
import {useCallback, useEffect} from "react";

const LocationDropDown = ({setLocation}) => {
    const LOCATION_KEY = "location";

    const updateLocation = useCallback((location) => {
        setLocation(location);
        location != null ?
            localStorage.setItem(LOCATION_KEY, location) : localStorage.removeItem(LOCATION_KEY);
    }, [setLocation]);

    const loadFromStorage = localStorage.getItem(LOCATION_KEY) || null;

    useEffect(() => {
        setLocation(loadFromStorage);
    }, [setLocation, loadFromStorage]);


    return (
        <div className={"LocationDropDown"}>
            <Autocomplete
                value={loadFromStorage}
                renderInput={
                    (params) => <TextField {...params} label="Location"/>}
                options={LOCATIONS}
                onChange={(event, newValue, reason) => {
                    if (reason === "clear") {
                        updateLocation(null);
                    } else {
                        updateLocation(newValue);
                    }
                }}/></div>
    );
};

export default LocationDropDown;