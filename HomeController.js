const Controller = require("./Controller");

class HomeController extends Controller {
  constructor(req, res) {
    super(req, res);
    this.req = req;
    this.res = res;
  }
  index() {
    this.req.body;
    this.res.json(this.req.body);
  }
  store() {
    this.res.send("Store");
  }
}

module.exports = (req, res) => new HomeController(req, res);
