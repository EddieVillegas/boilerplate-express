const express = require('express');
require("dotenv").config()
const app = express();

const logger = function(req, res, next) {
    console.log(`${req.method} ${req.path} - ${req.ip}`);
    next()
}

app.use("/public", express.static(__dirname + "/public"))

app.get("/", function(req, res) {
    const view = __dirname + "/views/index.html";
    res.sendFile(view);
});

app.get("/json", logger, function(req, res) {
    const message = process.env.MESSAGE_STYLE === "uppercase" ? "HELLO JSON" : "Hello json";
    res.json({message})
});

module.exports = app;