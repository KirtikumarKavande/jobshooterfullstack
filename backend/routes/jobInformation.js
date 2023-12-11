const express=require('express')
const jobInformationController=require("../controller/jobInformation")
const authMiddlware = require("../middleware/auth");

const router=express.Router()


router.post('/jobInformation',authMiddlware.auth,jobInformationController.jobInformation)
router.get('/jobInformation',authMiddlware.auth,jobInformationController.getJobInformation)


module.exports=router