'use strict';
exports.handler = (event, context, callback) => {
    const name = event.pathParameters.name || 'world';
    return callback(null, {
        statusCode: 200,
        body: JSON.stringify({
            message: `Hello ${world}`
        })
    });
};