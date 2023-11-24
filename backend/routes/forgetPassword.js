const express = require("express");
const forgetPassword = require("../controller/forgetPassword");
const router = express.Router();

router.post("/emailverification", forgetPassword.verifyEmail,forgetPassword.emailForOtp);
router.post("/verifyOtp", forgetPassword.verifyOtp);
router.post("/newPassword", forgetPassword.newPassword);




module.exports = router;
