import {API} from "aws-amplify";

export const GetPetInfo = async (location = "AGOURA", status = "RTGH") => {
    const results = await API.get("backendAPI", `/animals?location=${location}&status=${status}`);

    return [results];
};