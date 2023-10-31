const express = require('express');
import { MongoClient, ServerApiVersion } from 'mongodb';
import * as c from 'colors';
import { privateDecrypt } from 'crypto';
import Logger from './plugins/Logger';
require('dotenv').config();

import { publicKey, privateKey } from './plugins/keys';

const MONGODB_URI = process.env.DATABASE_HOST || '';
const client = new MongoClient(MONGODB_URI, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

const logger: Logger = new Logger();

const app = express();
const PORT = 8000;
const FRONTEND_URL = '192.168.1.14';

app.use((req: any, res: any, next: Function) => {
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const auth = req.headers['authorization'] || 'unknown';
    const url = req.originalUrl;
    const log = `[${new Date().toISOString()}] ${c.bgGreen("INFO")}  ${c.blue(ip)} [${c.red(auth)}] - ${c.blue(url)}`;
    logger.output(log);
    next();
});

app.get('/server/', (req: any, res: any) => {
    res.status(200).send(`Ping successful. Server is up and running.`);
});

app.get('/server/key', (req: any, res: any) => {
    res.status(200).send({ key: publicKey });
})

app.get('/', (req: any, res: any) => {
    res.redirect(`http://${FRONTEND_URL}:3000/`);
});

app.listen(PORT, () => {
    logger.output(`[${new Date().toISOString()}] ${c.bgGreen("INFO")}  Server listening on host ${c.blue(`http://192.168.1.14:${PORT}/`)}`);
    run().catch(console.dir);
});

async function run(): Promise<void> {
    try {
        await client.connect();
        await client.db("admin").command({ ping: 1 });
        logger.output(`[${new Date().toISOString()}] ${c.bgGreen("INFO")}  Database is up`);
    } finally {
        await client.close();
    }
}