import {API} from "aws-amplify";

export const GetPetInfo = async (location = "AGOURA") => {
    const results = await API.get("backendAPI", `/animals?location=${location}`);

    return [results];
};