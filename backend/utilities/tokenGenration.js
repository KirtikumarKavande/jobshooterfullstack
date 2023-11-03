const jwt = require("jsonwebtoken");
require("dotenv").config();

 exports.genrateAccessToken = (email) => {
  return jwt.sign({ email: email }, process.env.JWT_KEY);
};





