const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const userDetails = require("./routes/userDetails");
const jobInformationRoutes=require("./routes/jobInformation")

const cors = require("cors");
const userRoutes = require("./routes/userRoutes");
const forgetPasswordRoutes=require('./routes/forgetPassword')
dotenv.config();
const app = express();

app.use(bodyParser.json());
app.use(cookieParser());

app.use(cors({ origin: "http://localhost:3000", credentials: true }));

app.use(userRoutes);
app.use(userDetails);
app.use(forgetPasswordRoutes)
app.use(jobInformationRoutes)



mongoose
  .connect(process.env.MONGODB_CONNECTION_URL)
  .then(() => {
    console.log("connected to MongoDB");
    app.listen(4000);
  })
  .catch((err) => {
    console.log(err);
  });
