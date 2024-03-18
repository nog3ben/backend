const { DataTypes } = require("sequelize");
const database = require("../resources/db_connection.js");

const user_post = database.define(
  "usuario_postagem",
  {
    usuario_id: DataTypes.INTEGER,
    postagem_id: DataTypes.INTEGER,
  },
  {
    freezeTableName: true,
  }
);

module.exports = user_post;
