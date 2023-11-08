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
  
  console.log("triggers",req.user);
  const resData = await UserDetails.findOne({userId:req.user._id});

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

module.exports = { locationDetails, getlocationDetails };
