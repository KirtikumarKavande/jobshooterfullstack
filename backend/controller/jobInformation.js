const JobInformation = require("../model/jobInformation");
const jobInformation = async (req, res) => {
  try {
    const jobInfo = new JobInformation({
      ...req.body,
    });
    const data = await jobInfo.save();
    console.log(data);
    res.status(200).json({
      statusCode: 200,
      success: true,
      message: "data added Successfully",
    });
  } catch (err) {
    res
      .status(400)
      .json({
        statusCode: 400,
        success: false,
        message: "something went wrong",
      });
  }
};

module.exports = { jobInformation };
