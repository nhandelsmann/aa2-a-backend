const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
const port = 5000;

const doc = require('./ressources/citations.json');
const keys = Object.keys(doc);

app.get("/", (req, res) => {
    res.send("Welcome to Backend!");
});

app.get("/getRandom", (req, res) => {
    let randIndex = Math.floor(Math.random() * keys.length);
    let randKey = keys[randIndex];
    let cite = doc[randKey];
    res.send({ msg: cite });
});



app.listen(port, () => {
    console.log(`Backend listening at http://localhost:${port}`);
});