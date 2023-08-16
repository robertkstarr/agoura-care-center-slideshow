const axios = require("axios");
const url = "https://api.lacounty.gov/accsearch/AnimalSearchServlet?pageNumber=1&pageSize=500&animalCareCenter=AGOURA&animalType=ALL&sex=ALL&breed=ALL&animalAge=ALL&animalSize=ALL&animalStatus=RTGH&animalID=&test=6";

/**
 * @type {import("@types/aws-lambda").APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
    const response = await axios.get(url).then((response) => {
        return response;
    });

    return {
        statusCode: 200,
        body: JSON.stringify(response.data),
        headers: {
            "Access-Control-Allow-Origin": "*"
        }
    };
};
