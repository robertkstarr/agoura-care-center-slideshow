import {Autocomplete, TextField} from "@mui/material";
import "./LocationDropDown.css";
import {LOCATIONS} from "../../App";

const LocationDropDown = ({setLocation}) => {
    return (
        <div className={"LocationDropDown"}>
            <Autocomplete
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