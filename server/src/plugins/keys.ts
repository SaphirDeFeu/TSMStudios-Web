import { generateKeyPairSync } from 'crypto';
import Logger from './Logger';
import * as c from 'colors';

export const { privateKey, publicKey } = generateKeyPairSync('rsa', {
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

const logger: Logger = new Logger();

logger.output(`[${new Date().toISOString()}] ${c.bgGreen("INFO")}  Generated encryption keys`);
