import express from "express";
import path from 'path';
var app = express();

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, './index.html'));
});

app.listen(1303, () => console.log("Running on localhost: 1303"));