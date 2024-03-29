const bcrypt = require("bcrypt");
const user = require("../models/user.js");
const { apiResponse } = require("../resources/response.js");

module.exports.index = async (app, req, res) => {
  try {
    const data = await user.findAll();

    if (data.length == 0) {
      return res.status(404).json(apiResponse(true, "dataNotFound"));
    }

    return res.status(200).json(apiResponse(true, "dataRetrieveSuccess", data));
  } catch (err) {
    return res.status(500).json(apiResponse(false, "dataRetriveFailed"));
  }
};

module.exports.show = async (app, req, res) => {
  try {
    const data = await user.findByPk(req.params.id);

    if (!data) {
      return res.status(404).json(apiResponse(true, "dataNotFound"));
    }

    return res.status(200).json(apiResponse(true, "dataRetrieveSuccess", data));
  } catch (err) {
    return res.status(500).json(apiResponse(false, "dataRetriveFailed"));
  }
};

module.exports.post = async (app, req, res) => {
  try {
    bcrypt.genSalt(7, (err, salt) => {
      bcrypt.hash(req.body.senha, salt, async (err, hash) => {
        data = await user.create({
          nome: req.body.nome,
          email: req.body.email,
          senha: hash,
        });
      });
    });

    return res.status(200).json(apiResponse(true, "dataStoreSuccess"));
  } catch (err) {
    return res.status(500).json(apiResponse(false, "dataStoreFailed"));
  }
};

module.exports.put = async (app, req, res) => {
  try {
    const data = await user.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    if (!data) {
      return res
        .status(400)
        .json(apiResponse(true, "dataUpdateUnexpectedError"));
    }

    return res.status(200).json(apiResponse(true, "dataUpdateSuccess", data));
  } catch (err) {
    return res.status(500).json(apiResponse(false, "dataUpdateFailed"));
  }
};

/** VALIDAR INPUTS */
module.exports.remove = async (app, req, res) => {
  try {
    const data = await user.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!data) {
      return res
        .status(200)
        .json(apiResponse(true, "dataDeleteUnexpectedError"));
    }

    return res.status(200).json(apiResponse(true, "dataDeleteSuccess", data));
  } catch (err) {
    return res.status(500).json(apiResponse(false, "dataDeleteFailed"));
  }
};
