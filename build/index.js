"use strict";
const controller = require("./TesteController");
const HomeController = require("./HomeController");
const express = require("express");
const app = express();
// app.all("/", (req, res) => controller(req, res));
app.all("/home", HomeController);
app.listen(8181, () => {
    console.log("Running on port 8181");
});
