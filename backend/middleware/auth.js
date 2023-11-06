const User = require("../model/user");
const jwt = require("jsonwebtoken");
const auth = async (req, res, next) => {
  try {
    var token = req.cookies["token"];
    const dataInJWT = jwt.verify(token, process.env.JWT_KEY);
    const user = await User.findOne({ email: dataInJWT.email });
    if (user) {
      req.user = user;
      next();
    } else {
      res.status(403).json({ success: false, message: "something went wrong" });
    }
  } catch (err) {
    res.status(403).json({ success: false, message: "something went wrong" });
  }

};

module.exports = { auth };
