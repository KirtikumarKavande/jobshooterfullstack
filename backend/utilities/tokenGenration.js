const jwt = require("jsonwebtoken");
require("dotenv").config();

const genrateAccessToken = (email) => {
  return jwt.sign({ email: email }, process.env.JWT_KEY);
};

module.exports = { genrateAccessToken };
