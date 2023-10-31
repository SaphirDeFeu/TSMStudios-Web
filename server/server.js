const express = require('express');
const fs = require('fs');
const path = require('path');
const { MongoClient, ServerApiVersion } = require('mongodb');
const c = require('colors');
const { privateDecrypt } = require('crypto');
const Logger = require('./plugins/Logger');
require('dotenv').config();

const { publicKey, privateKey } = require('./plugins/keys');

const MONGODB_URI = process.env.DATABASE_HOST;
const client = new MongoClient(MONGODB_URI, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

const logger = new Logger();

const app = express();
const PORT = 8000;
const FRONTEND_URL = '192.168.1.14';

app.use((req, res, next) => {
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const auth = req.headers['authorization'] || 'unknown';
    const url = req.originalUrl;
    const log = `[${new Date().toISOString()}] ${"INFO".bgGreen}  ${ip.blue} [${auth.red}] - ${url.blue}`;
    logger.output(`[${new Date().toISOString()}] ${"INFO".bgGreen}  Server listening on host ${`http://192.168.1.14:${PORT}/`.blue}`);
    next();
});

app.get('/server/', (req, res) => {
    res.status(200).send(`Ping successful. Server is up and running.`);
});

app.get('/server/key', (req, res) => {
    res.status(200).send({ key: publicKey });
})

app.get('/', (req, res) => {
    res.redirect(`http://${FRONTEND_URL}:3000/`);
});

app.listen(PORT, () => {
    logger.output(`[${new Date().toISOString()}] ${"INFO".bgGreen}  Server listening on host ${`http://192.168.1.14:${PORT}/`.blue}`);
    run().catch(console.dir);
});

async function run() {
    try {
        await client.connect();
        await client.db("admin").command({ ping: 1 });
        logger.output(`[${new Date().toISOString()}] ${"INFO".bgGreen}  Database is up`);
    } finally {
        await client.close();
    }
}