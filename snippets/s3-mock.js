
AWS.S3.prototype.getObject = function ({ Bucket, Key }, callback) {
    return callback(null, {
        Body: new Buffer('data'),
    });
};

describe("tests", function () {

});
