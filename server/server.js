const express = require('express');
const fs = require('fs');
const path = require('path');
const { MongoClient, ServerApiVersion } = require('mongodb');
const c = require('colors');
require('dotenv').config();
const MONGODB_URI = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.xhtgaps.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(MONGODB_URI, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});


const app = express();
const PORT = 8000;

app.get('/api/', (req, res) => {
    res.status(200).send("Achieved API endpoint /");
});

app.listen(PORT, () => {
    console.log(`${"INFO".bgGreen}  Server listening on host ${`http://192.168.1.14:${PORT}/`.blue}`);
    run().catch(console.dir);
})

async function run() {
    try {
        await client.connect();
        await client.db("admin").command({ ping: 1 });
        console.log(`${"INFO".bgGreen}  Database is up`);
    } finally {
        await client.close();
    }
}