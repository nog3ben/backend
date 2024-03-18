const { Sequelize } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(
  //   process.env.PG_DATABASE,
  "",
  process.env.PG_USER,
  //   process.env.PG_PASSWORD,
  "",
  {
    host: "127.0.0.1",
    dialect: "postgres",
  }
);

module.exports.isConnected = async () => {
  try {
    await sequelize.authenticate();
    return true;
  } catch (e) {
    return false;
  }
};

module.exports = sequelize;
