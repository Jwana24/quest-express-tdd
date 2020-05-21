// app.js
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

module.exports = app;

app.get('/', (req,res) => {
    res.status(200).json({message: "Hello World!"});
})