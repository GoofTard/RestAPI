const { MongoClient, ObjectId } = require("mongodb");
const mongoose = require("mongoose");

const mongoDB =
  "mongodb://admin:admin@129.159.143.199:1028/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.6.1";
const dbName = "admin";

const init = () => {
  mongoose.connect(mongoDB, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    dbName,
  });

  const connection = mongoose.connection;

  connection.once("open", function () {
    console.log("MongoDB database connection established successfully");
  });
};

module.exports = { init };
