"use strict";
const Controller = require("./Controller");
const ControllerInterface = require("./Interface");
class HomeController extends Controller {
    index(req, res) {
        res.send("Skrrr");
    }
}
module.exports = (req, res) => new HomeController(req, res);
