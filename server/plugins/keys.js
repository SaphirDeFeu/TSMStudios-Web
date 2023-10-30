const { generateKeyPairSync } = require('crypto');

const { privateKey, publicKey } = generateKeyPairSync('rsa', {
    modulusLength: 2048,
    publicKeyEncoding: {
        type: 'spki',
        format: 'pem',
    },
    privateKeyEncoding: {
        type: 'pkcs8',
        format: 'pem',
        //cipher: 'aes-256-cbc',
    },
});

console.log(`${"INFO".bgGreen}  Generated encryption keys`);

module.exports = {
    publicKey,
    privateKey,
};