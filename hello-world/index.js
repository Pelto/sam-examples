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

if (require.main === module) {
    const event = { pathParameters: { name: "orbis" } };
    exports.handler(event, {}, (error, result) => {
        if (error) console.log(error);
        else console.log(result);
    });
}
