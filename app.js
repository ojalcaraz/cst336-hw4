const express = require("express");
const faker = require("faker");
const app = express();
app.engine('html', require('ejs').renderFile);
app.use(express.static("public"));

// routes
app.get("/", function(req, res) {
    res.render("index.html", {faker: faker});
});

app.get("/windows", function(req, res) {
    res.render("windows.html", {faker: faker});
});

app.get("/mac", function(req, res) {
    res.render("mac.html", {faker: faker});
});

app.get("/linux", function(req, res) {
    res.render("linux.html", {faker: faker});
});

// starting server
app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Express server running hw4...");
});