const express=require('express')
const jobInformationController=require("../controller/jobInformation")
const router=express.Router()


router.post('/jobInformation',jobInformationController.jobInformation)

module.exports=router