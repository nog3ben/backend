const post = require("../models/post.js");
const userPost = require("../models/user_post.js");
const sequelize = require("../resources/db_connection.js");

const { apiResponse } = require("../resources/response.js");

module.exports.index = async (app, req, res) => {
  try {
    const data = await post.findAll();

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
    const data = await post.findByPk(req.params.id);

    if (!data) {
      return res.status(404).json(apiResponse(true, "dataNotFound"));
    }

    return res.status(200).json(apiResponse(true, "dataRetrieveSuccess", data));
  } catch (err) {
    return res.status(500).json(apiResponse(false, "dataRetriveFailed"));
  }
};

module.exports.post = async (app, req, res) => {
  /** INICIO DE TRANSACTION */
  const transaction = await sequelize.transaction();
  /** INICIO DE TRANSACTION */

  try {
    const data = await post.create(
      {
        titulo: req.body.titulo,
        conteudo: req.body.conteudo,
      },
      { transaction: transaction }
    );

    const postUser = await userPost.create(
      {
        usuario_id: req.userId,
        postagem_id: data.id,
      },
      { transaction: transaction }
    );

    if (!data || !postUser) {
      /**  VOLTAR TRANSACTIONS */
      transaction.rollback();
      /**  VOLTAR TRANSACTIONS */

      return res
        .status(400)
        .json(apiResponse(true, "dataStoreUnexpectedError"));
    }

    /** APROVAR TRANSACTION */
    transaction.commit();
    /** APROVAR TRANSACTION */

    return res.status(200).json(apiResponse(true, "dataStoreSuccess", data));
  } catch (err) {
    /**  VOLTAR TRANSACTIONS */
    transaction.rollback();
    /**  VOLTAR TRANSACTIONS */

    return res.status(500).json(apiResponse(false, "dataStoreFailed"));
  }
};

module.exports.put = async (app, req, res) => {
  try {
    const data = await post.update(req.body, {
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
    const data = await post.destroy({
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
