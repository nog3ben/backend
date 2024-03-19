/** IMPORTS  */
const express = require("express");
const consign = require("consign");
const cors = require("cors");
const { tokenValidator } = require("./src/middleware/access_token.js");
const { apiResponse } = require("./src/resources/response.js");
/** IMPORTS  */

/** INICIALIZADOR DO PACOTE EXPRESS PARA CRIAR API */
const app = express();
/** INICIALIZADOR DO PACOTE EXPRESS PARA CRIAR API */

/** ADICIONANDO SUPORTE A JSON EM API */
app.use(express.json());
/** ADICIONANDO SUPORTE A JSON EM API */

/** ADICIONAN DO MIDDLEWARE QUE VERIFICA OS TOKEN DO USUARIO */
app.use(tokenValidator);
/** ADICIONAN DO MIDDLEWARE QUE VERIFICA OS TOKEN DO USUARIO */

/** ADICIONANDO SUPORTE A CROSS-ORIGIN REQUESTS NA API */
app.use(cors());
/** ADICIONANDO SUPORTE A CROSS-ORIGIN REQUESTS NA API */

/** MODULO CONSING PARA LER/CARREGAR CLASSES E MODELOS DE OUTROS ARQUIVOS */
consign({ cwd: "src" }).include("routes").into(app);
/** MODULO CONSING PARA LER/CARREGAR CLASSES E MODELOS DE OUTROS ARQUIVOS */

/** WRAPPER PARA ROTAS QUE NAO EXISTEM OU NAO ENCOTNRADAS NO SISTEMA */
app.all("*", async (req, res) => {
  return res.status(404).json(apiResponse(false, "routeNotFound"));
});
/** WRAPPER PARA ROTAS QUE NAO EXISTEM OU NAO ENCOTNRADAS NO SISTEMA */

/** LOOP PRINCIPAL */
app.listen(9091, () => {
  console.log("Servidor ativo e escutando na porta: 9091");
});
/** LOOP PRINCIPAL */
