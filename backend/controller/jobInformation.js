const JobInformation = require("../model/jobInformation");
const jobInformation = async (req, res) => {
  try {
    const jobInfo = new JobInformation({
      ...req.body,
      email: req.user.email,
    });
    const data = await jobInfo.save();
    console.log(data);
    res.status(200).json({
      statusCode: 200,
      success: true,
      message: "data added Successfully",
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      statusCode: 400,
      success: false,
      message: "something went wrong",
    });
  }
};
const getJobInformation = async (req, res) => {
  try {
    const remainingJobInfo = await JobInformation.find({
      email: { $ne: req.user.email },
    });

    res.status(200).json({
      statusCode: 200,
      success: true,
      data: remainingJobInfo,
      message: "data get successfully",
    });
  } catch (err) {
    console.log(err)
    res.status(400).json({
      statusCode: 400,
      success: false,
      message: "something went wrong",
    });
  }
};

module.exports = { jobInformation, getJobInformation };
