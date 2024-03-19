const { apiResponse } = require("../resources/response.js");
const login = require("../models/login.js");

module.exports.tokenValidator = async (req, res, next) => {
  if (!req.header("Authorization")) {
    return res.status(422).json(apiResponse(false, "tokenNotInformed"));
  } else {
    const loginToken = await login.findOne({
      where: {
        token: req.header("Authorization"),
      },
    });

    if (loginToken) {
      req.userId = loginToken.usuario_id;
      next();
    } else {
      return res.status(422).json(apiResponse(false, "tokenDoesNotExist"));
    }
  }
};
