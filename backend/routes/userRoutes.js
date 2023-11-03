const express = require("express");
const userController = require("../controller/userController");

const auth =require("../middleware/auth")

const router = express.Router();

router.post("/createuser", userController.createUser);

router.post('/signin',userController.signInUser)


router.post('/hi',auth.auth)

module.exports = router;
