const express = require("express");
const userController = require("../controller/userController");


const router = express.Router();

router.post("/createuser", userController.createUser);

router.post('/signin',userController.signInUser)



module.exports = router;
