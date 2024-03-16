const mongoose = require("mongoose");
const connectionString = ""; //needs connection sting from lectures section 7.10
const options = {
  userNewUrlParser: true,
  userUniFieldTopology: true,
  userFindAndModify: false,
  userCreateIndex: true,
};

function dbConnection() {
  mongoose
    .connect(connectionString, options)
    .then(() => console.log("mongo connection OK"))
    .catch((err) => console.log(err));
}

module.exports = dbConnection;
