const { MongoClient } = require("mongodb");
const dotenv = require("dotenv");

dotenv.config();

const uri = process.env.MONGO_URI;
console.log("connect", uri);
const clients = new MongoClient(uri);

const database = clients.db("eventApp");

const events = database.collection("events");

module.exports = {
  events,
};
