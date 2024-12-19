require("dotenv").config();
const config = {
  development: {
    username: "mrifk",
    password: "",
    database: "mrifk",
    host: "127.0.0.1",
    dialect: "postgres",
  },
  production: {
    username: "mrifk",
    password: "",
    database: "mrifk",
    host: "127.0.0.1",
    dialect: "postgres",
  },
};

module.exports = config;
