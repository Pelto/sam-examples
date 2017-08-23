
AWS.S3.prototype.getObject = function (params, callback) {
    return callback(null, {
        Body: new Buffer('data'),
    });
};
