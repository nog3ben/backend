"use strict";
class Controller {
    constructor(req, res) {
        if (req.method == "GET") {
            this.index(req, res);
        }
    }
}
module.exports = Controller;
