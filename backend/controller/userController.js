const User = require("../model/user");
const bcrypt = require("bcrypt");

const createUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    console.log(req.body)

    bcrypt.hash(password, 10, async(err, hash) => {
        console.log("hash it",hash)
      const user = new User({
        email:email,
        password: hash,
      });
      await user.save();
      res.status(200).json({message:"Signup successful"})

    });
  } catch (err) {}
};

module.exports = { createUser };
