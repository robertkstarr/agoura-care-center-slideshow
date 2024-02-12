import {Autocomplete, TextField} from "@mui/material";
import "./LocationDropDown.css";

import {AGOURA, LOCATIONS} from "../../Resources/LOCATIONS";

const LocationDropDown = ({setLocation}) => {
    return (
        <div className={"LocationDropDown"}>
            <Autocomplete
                defaultValue={AGOURA}
                renderInput={
                    (params) => <TextField {...params} label="Location"/>}
                options={LOCATIONS}
                onChange={(event, newValue, reason) => {
                    if (reason === "clear") {
                        setLocation("ALL");
                    } else {
                        setLocation(newValue);
                    }
                }}/></div>
    );
};

export default LocationDropDown;