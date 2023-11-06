const UserDetails = require("../model/userDetails");
const locationDetails = async (req, res) => {
  try {
    const { country, state, city } = req.body;
    const userDetailsData = new UserDetails({ country, state, city,userId:req.user._id });
    await userDetailsData.save();
    res
      .status(200)
      .json({ statusCode: 200, message: "User details saved successfully" });
  } catch (err) {
    res.status(400).json({ statusCode: 400, message: "Something Went wrong" });
  }
};

module.exports = { locationDetails };
