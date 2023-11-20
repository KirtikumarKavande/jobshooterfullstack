const express = require("express");
const authMiddlware = require("../middleware/auth");
const userDetails = require("../controller/userDetails");

const router = express.Router();

router.post("/location", authMiddlware.auth, userDetails.locationDetails);
router.get("/userdetails", authMiddlware.auth, userDetails.getUserDetails);

router.post("/profile",authMiddlware.auth, userDetails.postProfileDataToDB)

module.exports = router;
