import {API} from "aws-amplify";

export const GetPetInfo = async ({location}) => {
    const results = await API.get("backendAPI", "/animals");

    return [results];
};