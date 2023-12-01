require("dotenv").config();
const User = require("../model/user");
const bcrypt = require("bcrypt");

const SendinblueApiV3Sdk = require("sib-api-v3-sdk");
SendinblueAPIKey = process.env.SENDINBLUE_API_KEY;
SendinblueApiV3Sdk.ApiClient.instance.authentications["api-key"].apiKey =
  SendinblueAPIKey;
function generateRandom6DigitOTP() {
  const min = 100000;
  const max = 999999;
  const randomOTP = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomOTP.toString();
}
let emailOfUser = "";
let otp;

const verifyEmail = async (req, res, next) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      req.user = user;
      emailOfUser = email;
      next();
    } else {
      res
        .status(400)
        .json({ success: false, statusCode: 400, message: "User Not Found" });
    }
  } catch (err) {
    res.status(400).json({
      success: false,
      statusCode: 400,
      message: "Something went wrong",
    });
  }
};

const emailForOtp = async (req, res, next) => {
  try {
    otp = generateRandom6DigitOTP().trim();

    const subject = "OTP Verification";
    const sender = { email: "kirtikumar0005@gmail.com", name: "JobShooter" };
    const toEmail = [{ email: req.user.email }];
    const htmlContent = `OTP for your account is ${otp}.`;

    new SendinblueApiV3Sdk.TransactionalEmailsApi()
      .sendTransacEmail({
        subject: subject,
        sender: sender,

        to: toEmail,
        htmlContent: htmlContent,
      })

      .then(
        function (data) {
          res
            .status(200)
            .json({ success: true, message: "OTP Sent Successfully" });
        },
        function (error) {
          res.status(400).json(error);
        }
      )
      .then(() => {
        setTimeout(() => {
          otp = "";
        }, 60000);
      });
  } catch (err) {
    res.status(400).json({ success: false, message: err });
  }
};

const verifyOtp = (req, res) => {
  try {
    const userEnteredOtp = req.body.otp;
    if (userEnteredOtp === otp) {
      res.status(200).json({
        success: true,
        statusCode: 400,
        message: "OTP Verified Succeffully",
      });
    } else {
      res
        .status(400)
        .json({ success: false, statusCode: 400, message: "OTP Do not Match" });
    }
  } catch (err) {
    res.status(400).json({
      success: false,
      statusCode: 400,
      message: "Something Went Wrong Try Again",
    });
  }
};

const newPassword = async (req, res) => {
  console.log("logged", emailOfUser);

  const { password } = req.body;
  try {
    bcrypt.hash(password, 10, async (err, hash) => {
      await User.findOneAndUpdate({ email: emailOfUser }, { password: hash });

      res.status(200).json({
        success: true,
        statusCode: 200,
        message: "Password updated successfully",
      });
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      success: true,
      statusCode: 400,
      message: "Something Went Wrong",
    });
  }
};

module.exports = { verifyEmail, emailForOtp, verifyOtp, newPassword };
