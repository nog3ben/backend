const HomeController = require("./HomeController");
const express = require("express");

const app = express();

/** MIDLEWARE */
app.use(express.json());
/** MIDLEWARE */

app.all("/home", HomeController);

/** SERVIDOR  */
app.listen(8181, () => {
  console.log("Running on port 8181");
});
/** SERVIDOR */
