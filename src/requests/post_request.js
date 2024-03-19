const { apiResponse } = require("../resources/response.js");

const bodyParams = ["titulo", "conteudo"];

module.exports.paramsValidator = (req, res, next) => {
  if (isNaN(req.params.id)) {
    return res.status(422).json(apiResponse(false, "paramsInvalid"));
  } else {
    next();
  }
};

module.exports.bodyValidator = (req, res, next) => {
  var isError = false;
  var responseMessage = "";
  const specialChars = /[!#$%^&*()\\[\];\\|]+/g;

  Object.keys(req.body).map((x) => {
    /** VALIDA CASO VENHAM CARACTERES ESPECIAIS */
    if (bodyParams.length != Object.keys(req.body).length) {
      isError = true;
      responseMessage = "paramsAreMissing";
      return;
    }

    if (!bodyParams.includes(x)) {
      isError = true;
      responseMessage = `${x}ParamDidNotExist`;
      return;
    }

    if (specialChars.test(req.body[x]) || req.body[x].length == 0) {
      isError = true;
      responseMessage = `${x}ParamValueAreInvalid`;
      return;
    }
  });

  if (isError) {
    return res.status(422).json(apiResponse(false, responseMessage));
  } else {
    next();
  }
};
