const bodyparser = require("body-parser");
const { bodyValidator } = require("../requests/login_request.js");
const { login, logout } = require("../controllers/login_controller.js");

module.exports = (app) => {
  /** BUSCA TODOS OS DADOS */
  app.post("/login", bodyValidator, (req, res) => {
    login(app, req, res);
  });
  /** BUSCA TODOS OS DADOS */

  /** BUSCA DADOS DE UM ID ESPECIFICO */
  app.post("/logout", (req, res) => {
    logout(app, req, res);
  });
  /** BUSCA DADOS DE UM ID ESPECIFICO */
};
