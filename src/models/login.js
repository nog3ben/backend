const { DataTypes } = require("sequelize");
const database = require("../resources/db_connection.js");

const login = database.define(
  "login",
  {
    usuario_id: DataTypes.INTEGER ,
    token: DataTypes.TEXT,
  },
  {
    freezeTableName: true,
  }
);

module.exports = login;
