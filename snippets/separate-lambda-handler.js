const eventParser = require('your-event-parser');
const responseWrapper = require('response-wrapper');
const businessLogic = require('business-logic');


exports.handler = (event, context, callback) => {
    const eventData = eventParser(event);

    businessLogic.doStuff(eventData, (err, data) => {
        const response = responseWrapper(err, data);
        callback(null, response);
    });
};

