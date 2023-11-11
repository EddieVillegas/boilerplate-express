const express = require('express');
const app = express();

app.get("/", function(req, res) {
    const view = __dirname + "/views/index.html";
    res.sendFile(view);
});

module.exports = app;