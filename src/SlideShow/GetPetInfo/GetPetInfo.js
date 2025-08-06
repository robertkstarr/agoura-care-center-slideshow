import { get } from 'aws-amplify/api';
export const GetPetInfo = async (location = 'AGOURA', status = 'RTGH') => {
    try {
        const restOperation = get({
            apiName: 'backendAPI',
            path: `/animals?location=${location}&status=${status}`,
        });
        const response = await restOperation.response;
        console.log(response);
        return response.body.json().then((pets) => {
            return [pets];
        });
    } catch (e) {
        console.log('GET call failed: ', e);
    }
};
