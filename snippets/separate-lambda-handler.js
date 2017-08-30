const businessLogic = require('business-logic');
const eventParser = require('event-parser');
const responseWrapper = require('response-wrapper');


exports.handler = (event, context, callback) => {
    const eventData = eventParser(event);

    businessLogic.doStuff(eventData, (err, data) => {
        const response = responseWrapper(err, data);
        callback(null, response);
    });
};

