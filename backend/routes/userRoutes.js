const express = require("express");
const userController = require("../controller/userController");

const router = express.Router();

router.post("/createuser", userController.createUser);

router.post("/signin", userController.signInUser);

router.post("/canpostjob", userController.canpostjob);

module.exports = router;
