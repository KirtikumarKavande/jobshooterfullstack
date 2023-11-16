const express = require("express");
const authMiddlware = require("../middleware/auth");
const userDetails = require("../controller/userDetails");

const router = express.Router();

router.post("/location", authMiddlware.auth, userDetails.locationDetails);
router.get("/location", authMiddlware.auth, userDetails.getlocationDetails);

router.post("/profile",authMiddlware.auth, userDetails.postProfileDataToDB)

module.exports = router;
