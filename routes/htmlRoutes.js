const path = require("path");

module.exports = function (app) {

    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

    app.get("/engines", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/engines.html"));
    });

    app.get("/slant", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/slant-six.html"));
    });

    app.get("/three", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/three18.html"));
    });

    app.get("/axles", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/axles.html"));
    });

    app.get("/classes", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/classes.html"));
    });

    app.get("/special", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/special.html"));
    });

    app.get("*", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });
};