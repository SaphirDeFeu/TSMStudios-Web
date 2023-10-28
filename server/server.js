const express = require('express');
const fs = require('fs');
const path = require('path');
const sqlite = require('sqlite3').verbose();

const app = express();
const PORT = 8000;

app.get('/api/', (req, res) => {
    res.status(200).send("Achieved API endpoint /");
});

app.listen(PORT, () => {
    console.log(`Server listening on host http://192.168.1.14:${PORT}/`);
})