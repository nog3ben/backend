const { DataTypes } = require("sequelize");
const database = require("../resources/db_connection.js");

const user = database.define(
  "usuario",
  {
    nome: DataTypes.TEXT,
    email: DataTypes.TEXT,
    senha: DataTypes.TEXT,
  },
  {
    freezeTableName: true,
  }
);

module.exports = user;
