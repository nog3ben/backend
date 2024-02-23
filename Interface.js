const Controller = require("./Controller");

class ControllerInterface extends Controller {
  constructor(req, res) {
    if (typeof this.delete === "function") {
      console.log("sss");
    } else {
      throw new Error("Parameter is not a number!");
    }
    super(req, res);
  }
}

module.exports = ControllerInterface;
