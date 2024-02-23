const HomeController = require("./HomeController");

class Controller {
  constructor(req, res) {
    this.req = req;
    this.res = res;
    this.handler();
  }

  handler() {
    switch (this.req.method) {
      case "GET":
        this.index();
        break;

      case "POST":
        this.store();
        break;

      case "PUT":
        this.update();
        break;

      case "DELETE":
        this.delete();
        break;

      default:
        this.errorDispatcher();
        break;
    }
  }

  errorDispatcher() {
    this.res.send("Method not allowed");
  }
}

module.exports = Controller;
