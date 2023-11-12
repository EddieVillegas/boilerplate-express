const express = require('express');
const app = express();

app.use("/public", express.static(__dirname + "/public"))

app.get("/", function(req, res) {
    const view = __dirname + "/views/index.html";
    res.sendFile(view);
});

app.get("/json", function(req, res) {
    res.json({message: "Hello json"});
});

module.exports = app;