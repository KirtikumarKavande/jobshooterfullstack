require("dotenv").config();
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
  
let otp;

const User = require("../model/user");
const verifyEmail = async (req, res, next) => {
  try{
    const { email } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      req.user=user
      next();
    } else {
      res
        .status(400)
        .json({ success: false, statusCode: 400, message: "User Not Found" });
    }
  }catch(err)
  {
    res
    .status(400)
    .json({ success: false, statusCode: 400, message: "Something went wrong" });
  }
 
};


const emailForOtp = async (req, res, next) => {
  console.log("logged",req.user.email );
  try {
    //  er.parmeshwar1998@gmail.com
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
        //   console.log(error);

          res.status(400).json(error);
        }
      )
      .then(() => {
        setTimeout(() => {
          otp = "";
        }, 60000);
      });
  } catch (err) {
    // console.log(err);
    res.status(400).json({ success: false, message: err });
  }
};

const verifyOtp=(req,res)=>{
  try{
    const userEnteredOtp=req.body.otp
    if(userEnteredOtp===otp)
    {
      res
      .status(200)
      .json({ success: true, statusCode: 400, message: "OTP Verified Succeffully" });
    }else{
      res
      .status(400)
      .json({ success: false, statusCode: 400, message: "OTP Do not Match" });
    }
  }catch(err)
  {
    res
    .status(400)
    .json({ success: false, statusCode: 400, message: "Something Went Wrong Try Again" });
  }

}

const newPassword=(req,res)=>{
console.log("pass",req.body)  
}
 
module.exports = { verifyEmail, emailForOtp, verifyOtp,newPassword};
