
var AWS = require('aws-sdk')

function tokenGetter(secretParam){

    var client = new AWS.SecretsManager({
        region: "ap-south-1"
        });
    var secret,
        decodedBinarySecret;
        
        
    client.getSecretValue({SecretId: secretParam}, function(err, data) {
        if (err) {
            if (err.code === 'DecryptionFailureException')
                throw err;
            else if (err.code === 'InternalServiceErrorException')
                throw err;
            else if (err.code === 'InvalidParameterException')
                throw err;
            else if (err.code === 'InvalidRequestException')
                throw err;
            else if (err.code === 'ResourceNotFoundException')
                throw err;
        }
        else {
            if ('SecretString' in data) {
                secret = data.SecretString;
                return secret
            } else {
                var buff = new Buffer(data.SecretBinary, 'base64');
                decodedBinarySecret = buff.toString('ascii');
                return decodedBinarySecret
            }
        }        
        });
}

       
module.exports = tokenGetter