const { DataTypes } = require("sequelize");
const database = require("../resources/db_connection.js");

const user = database.define("user", {
  nome: DataTypes.TEXT,
});

module.exports = user;
