const user = require("../models/user.js");
const { apiResponse } = require("../resources/response.js");

module.exports.index = async (app, req, res) => {
  try {
    const data = await usuario.findAll();

    return res.status(500).json(apiResponse(true, "dataRetriveFailed", data));
  } catch (err) {
    return res.status(500).json(apiResponse(false, "dataRetriveFailed"));
  }
};

module.exports.show = async (app, req, res) => {
  try {
    return res
      .status(200)
      .json(apiResponse(true, "dataRetrieveSuccess", "datashow"));
  } catch (err) {
    return res.status(500).json(apiResponse(false, "dataRetriveFailed"));
  }
};

module.exports.post = async (app, req, res) => {
  try {
    return res
      .status(200)
      .json(apiResponse(true, "dataStoreSuccess", "datapost"));
  } catch (err) {
    return res.status(500).json(apiResponse(false, "dataStoreFailed"));
  }
};

module.exports.put = async (app, req, res) => {
  try {
    return res
      .status(200)
      .json(apiResponse(true, "dataStoreSuccess", "dataput"));
  } catch (err) {
    return res.status(500).json(apiResponse(false, "dataStoreFailed"));
  }
};

/** VALIDAR INPUTS */
module.exports.remove = async (app, req, res) => {
  try {
    return res
      .status(200)
      .json(apiResponse(true, "dataDeleteSuccess", "dataremove"));
  } catch (err) {
    return res.status(500).json(apiResponse(false, "dataDeleteFailed"));
  }
};
