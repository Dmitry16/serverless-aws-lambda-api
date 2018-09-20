'use strict';

module.exports.handler = async (event, context) => {
  
  return {
    statusCode: 200,
    body: JSON.stringify({
      Environment_variables: 'The GOOGLE_MAPS_API_KEY: ' + process.env.GOOGLE_MAPS_API_KEY + ', the other API key: ' + process.env.OTHER_API_KEY
    }),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};