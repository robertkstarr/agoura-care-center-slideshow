import {API} from "aws-amplify";

export const GetPetInfo = async () => {
    const results = await API.get("backendAPI", "/animals");

    return [results];
};