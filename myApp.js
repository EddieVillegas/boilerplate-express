const express = require('express');
require("dotenv").config()
const app = express();

app.use("/public", express.static(__dirname + "/public"))

app.get("/", function(req, res) {
    const view = __dirname + "/views/index.html";
    res.sendFile(view);
});

app.get("/json", function(req, res) {
    const message = process.env.MESSAGE_STYLE === "uppercase" ? "HELLO JSON" : "Hello json";
    res.json({message})
});

module.exports = app;