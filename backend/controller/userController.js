const express = require("express");
const app = express();
const User = require("../model/user");
const bcrypt = require("bcrypt");
const cookieParser = require("cookie-parser");

app.use(cookieParser());
const createUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });

    if (user) {
      res.status(401).json({ statusCode: 401, message: "User Already Exist" });
    } else {
      bcrypt.hash(password, 10, async (err, hash) => {
        const user = new User({ email: email, password: hash });
        await user.save();

       res.cookie("jwtToken","kirtikumar")
          .status(200)
          .json({ statusCode: 200, message: "user created successfully" });
      });
    }
  } catch (err) {
    res
      .status(400)
      .json({ statusCode: 400, message: "Something went wrong try again" });
  }
};

const signInUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      res.status(403).json({ statusCode: 403, message: "user not found" });
    } else {
      bcrypt.compare(password, user.password, (err, result) => {
        if (err) {
          throw new Error("something went wrong");
        }

        if (result === true) {
          res.status(200).json({
            success: true,
            statusCode: 200,
            message: "sign in success",
          });
        } else {
          res
            .status(400)
            .json({ success: false, message: "password is invalid" });
        }
      });
    }
  } catch (err) {
    res
      .status(400)
      .json({ statusCode: 400, message: "Something went wrong try again" });
  }
};

module.exports = { createUser, signInUser };
