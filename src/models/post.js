const { DataTypes } = require("sequelize");
const database = require("../resources/db_connection.js");

const post = database.define(
  "postagem",
  {
    titulo: DataTypes.TEXT,
    conteudo: DataTypes.TEXT,
    senha: DataTypes.TEXT,
  },
  {
    freezeTableName: true,
  }
);

module.exports = post;
