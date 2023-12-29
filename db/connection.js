require("dotenv").config();
const mongoose = require("mongoose");

const mongoURI = "mongodb://127.0.0.1:27017/sneaker";
const DB_URL = process.env.DB_URL;

mongoose
  .connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })

  .then((instance) => {
    console.log(`Connected to the db: ${instance.connections[0].name}`);
  })
  .catch((err) => console.log(`Connection failed`, err));

module.exports = mongoose;
