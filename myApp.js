const express = require('express');
require("dotenv").config()
const app = express();

const logger = function(req, res, next) {
    console.log(`${req.method} ${req.path} - ${req.ip}`);
    next()
}

app.route('/name').get((req, res) => {
    const { firstname, lastname } = req?.query;
    res.json({ name: `${firstname} ${lastname}`})
})

app.use('/:word/echo', (req, res) => {
    const {params: { word: echo }} = req;
    res.json({ echo });
});

app.use("/public", express.static(__dirname + "/public"))

app.get("/", function(req, res) {
    const view = __dirname + "/views/index.html";
    res.sendFile(view);
});

app.get("/now", function(req, res, next) {
    req.time = new Date().toString();
    next();
}, function(req, res) {
    res.json({ time: req.time })
})

app.get("/json", logger, function(req, res) {
    const message = process.env.MESSAGE_STYLE === "uppercase" ? "HELLO JSON" : "Hello json";
    res.json({message})
});

module.exports = app;