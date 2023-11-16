const UserDetails = require("../model/userDetails");
const locationDetails = async (req, res) => {
  try {
    const { country, state, city } = req.body;
    const userDetailsData = new UserDetails({
      country,
      state,
      city,
      userId: req.user._id,
    });
    await userDetailsData.save();
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: "User details saved successfully",
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      statusCode: 400,
      message: "Something Went wrong",
    });
  }
};

const getlocationDetails = async (req, res) => {
  const resData = await UserDetails.findOne({ userId: req.user._id });

  if (resData) {
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: "user location details found",
    });
  } else {
    res.status(400).json({
      success: false,
      statusCode: 400,
      message: "user location details not found",
    });
  }
};

const postProfileDataToDB = async (req, res, next) => {
  try {
    await UserDetails.findOneAndUpdate(
      { userId: req.user._id },
      {
        ...req.body,
      }
    );
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: "Profile updated successfully",
    });
  } catch (err) {
    console.log("update", err);
    res.status(400).json({
      success: false,
      statusCode: 400,
      message: "Something Went wrong",
    });
  }
};

module.exports = { locationDetails, getlocationDetails, postProfileDataToDB };
