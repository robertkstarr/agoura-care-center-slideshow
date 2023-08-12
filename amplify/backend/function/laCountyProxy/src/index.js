/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
    // const body = {
    //     message: "Hello from Lambda"
    // }
    return {
        statusCode: 200,
        body: JSON.stringify({message: "new message"}),
        headers: {
            "Access-Control-Allow-Origin": "*",
        }
    }
    // const response = axios.get('https://api.lacounty.gov/accsearch/AnimalSearchServlet?callback=animal&pageNumber=1&pageSize=500&animalCareCenter=AGOURA&animalType=ALL&sex=ALL&breed=ALL&animalAge=ALL&animalSize=ALL&animalStatus=RTGH&animalID=&test=6')
    //     .then((e) => {
    //
    //         return {
    //             statusCode: 200,
    //             body: JSON.stringify({message: "test"}),
    //             headers: {
    //                 "Access-Control-Allow-Origin": "*",
    //             }
    //         };
    //
    //     }).catch((e) => {
    //         return {
    //             statusCode: 200,
    //             body: JSON.stringify({message: e}),
    //             headers: {
    //                 "Access-Control-Allow-Origin": "*",
    //             }
    //         }
    //     });
};
