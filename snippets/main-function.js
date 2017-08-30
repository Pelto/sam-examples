
exports.handler = (event, context, callback) => {
    // ...
    return callback(null, response);
};


if (require.main === module) {

    const event = { /* your lambda event */ };

    exports.handler(event, {}, (error, result) => {
        if (error) console.error(error);
        else console.info(result);
    });
}
