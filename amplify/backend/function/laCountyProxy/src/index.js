const axios = require("axios");

const BASE_URL = "https://api.lacounty.gov/accsearch/AnimalSearchServlet?pageNumber=1&pageSize=500&animalType=ALL&sex=ALL&breed=ALL&animalAge=ALL&animalSize=ALL";
const AGOURA = "AGOURA";
const READY_TO_GO_HOME = "RTGH";

/**
 * @type {import("@types/aws-lambda").APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
    let location = AGOURA;
    let status = READY_TO_GO_HOME;

    if (event.multiValueQueryStringParameters) {
        const params = event.multiValueQueryStringParameters;

        location = params.location ? params.location[0] : AGOURA;
        status = params.status ? params.status[0] : READY_TO_GO_HOME;
    }

    const url = BASE_URL + `&animalCareCenter=${location}&animalStatus=${status}`;

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
