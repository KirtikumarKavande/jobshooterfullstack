const User = require("../model/user");
const bcrypt = require("bcrypt");
const acccessToken = require("../utilities/tokenGenration");

const createUser = async (req, res) => {
  const { email, password, firstName, lastName } = req.body;
  try {
    const user = await User.findOne({ email });

    if (user) {
      res.status(401).json({ statusCode: 401, message: "User Already Exist" });
    } else {
      bcrypt.hash(password, 10, async (err, hash) => {
        const user = new User({
          email: email,
          password: hash,
          firstName,
          lastName,
        });
        await user.save();

        res.cookie("token", acccessToken.genrateAccessToken(email));

        res.status(200).json({
          success: true,
          statusCode: 200,
          message: "User Created successfully",
          token: acccessToken.genrateAccessToken(email),
        });
      });
    }
  } catch (err) {
    res.status(400).json({
      success: false,
      statusCode: 400,
      message: "Something went wrong try again",
    });
  }
};

const signInUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      res
        .status(403)
        .json({ success: false, statusCode: 403, message: "User Not Found" });
    } else {
      bcrypt.compare(password, user.password, (err, result) => {
        if (err) {
          throw new Error("something went wrong");
        }

        if (result === true) {
          res.cookie("token", acccessToken.genrateAccessToken(email));
          res.status(200).json({
            success: true,
            statusCode: 200,
            message: "Sign in Successfully",
            token: acccessToken.genrateAccessToken(email),
          });
        } else {
          res
            .status(400)
            .json({ success: false, message: "Password is invalid" });
        }
      });
    }
  } catch (err) {
    res.status(400).json({
      success: false,
      statusCode: 400,
      message: "Something went wrong try again",
    });
  }
};

module.exports = { createUser, signInUser };
