const bodyparser = require("body-parser");
const {
  bodyValidator,
  paramsValidator,
} = require("../requests/post_request.js");
const {
  index,
  show,
  post,
  put,
  remove,
} = require("../controllers/post_controller.js");

module.exports = (app) => {
  /** BUSCA TODOS OS DADOS */
  app.get("/post", (req, res) => {
    index(app, req, res);
  });
  /** BUSCA TODOS OS DADOS */

  /** BUSCA DADOS DE UM ID ESPECIFICO */
  app.get("/post/:id", paramsValidator, (req, res) => {
    show(app, req, res);
  });
  /** BUSCA DADOS DE UM ID ESPECIFICO */

  /** INSERE DADOS DE USUARIO EM BANCO */
  app.post("/post", bodyparser.json(), bodyValidator, (req, res) => {
    post(app, req, res);
  });
  /** INSERE DADOS DE USUARIO EM BANCO */

  /** ATUALIZA DADOS DE UM USUARIO */
  app.put(
    "/post/:id",
    bodyparser.json(),
    paramsValidator,
    bodyValidator,
    (req, res) => {
      put(app, req, res);
    }
  );
  /** ATUALIZA DADOS DE UM USUARIO */

  /** DELETAR REGISTRO DE USUARIO */
  app.delete("/post/:id", paramsValidator, (req, res) => {
    remove(app, req, res);
  });
  /** DELETAR REGISTRO DE USUARIO */
};
