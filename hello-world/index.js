'use strict';
exports.handler = (event, context, callback) => {
    const name = event.pathParameters.name || 'world';
    const response = {
        statusCode: 200,
        headers: {
            'Cache-Control': 'no-cache'
        },
        body: JSON.stringify({
            message: `Hello ${name}`
        })
    };
    return callback(null, response);
};