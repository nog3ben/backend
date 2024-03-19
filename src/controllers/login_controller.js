const login = require("../models/login.js");
const user = require("../models/user.js");
const { apiResponse } = require("../resources/response.js");

module.exports.login = async (app, req, res) => {
  try {
    const user_data = await user.findOne({
      where: {
        email: req.body.email,
        senha: req.body.senha,
      },
    });

    if (!user_data) {
      return res.status(400).json(apiResponse(true, "loginInexistent"));
    } else {
      const data = await login.create({
        usuario_id: user_data.id,
        token: "tokenteste",
      });
      return res.status(200).json(apiResponse(true, "loginSuccess", data));
    }
  } catch (err) {
    return res.status(500).json(apiResponse(false, "loginFailed"));
  }
};

module.exports.logout = async (app, req, res) => {
  try {
    const data = await login.destroy({
      where: {
        usuario_id: req.userId,
      },
    });

    return res.status(200).json(apiResponse(true, "logoutSuccess", data));
  } catch (err) {
    return res.status(500).json(apiResponse(false, "logoutFailed"));
  }
};
