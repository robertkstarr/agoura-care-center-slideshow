import {API} from 'aws-amplify';

export const GetPetInfo = () => {
    const returnPetObject = require("../Resources/testResponse.json");

    API.get('backendAPI', '/animals').then((e) => console.log(e))

    return returnPetObject;
    //
    // axios.get("https://api.lacounty.gov/accsearch/AnimalSearchServlet?callback=animal&pageNumber=1&pageSize=500&animalCareCenter=AGOURA&animalType=ALL&sex=ALL&breed=ALL&animalAge=ALL&animalSize=ALL&animalStatus=ALL&animalID=&test=4", cors({
    //
    //     credentials: true
    // }), (req, res) => {
    //     console.log(req);
    //     console.log(res);
    // })
}