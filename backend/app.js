const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");


dotenv.config()
const app = express();



app.use(bodyParser.json());

mongoose
  .connect(process.env.MONGODB_CONNECTION_URL)
  .then(() => {
    console.log("connected to MongoDB");
    app.listen(4000);
  })
  .catch((err) => {
    console.log(err);
  });
