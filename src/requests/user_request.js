const { apiResponse } = require("../resources/response.js");

module.exports.paramsValidator = (req, res, next) => {
  if (isNaN(req.params.id)) {
    return res.status(422).json(apiResponse(false, "paramsInvalid"));
  } else {
    next();
  }
};

module.exports.bodyValidator = (req, res, next) => {
  let isEror = false;
  const specialChars = /[!#$%^&*()+\-=\[\]{};':"\\|,<>\/?]+/g;

  Object.keys(req.body).map((x) => {
    /** VALIDA CASO VENHAM CARACTERES ESPECIAIS */
    if (specialChars.test(req.body[x])) {
      isEror = true;
      return;
    }
    if (!["nome", "email", "senha"].includes(x)) {
      isEror = true;
      return;
    }
  });

  if (isEror) {
    return res.status(200).json(apiResponse(false, "bodyParamsIsInvalid"));
  } else {
    next();
  }
};
