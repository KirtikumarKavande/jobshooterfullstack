const express=require('express')
const authMiddlware=require("../middleware/auth")
const userDetails=require("../controller/userDetails")

const router=express.Router()


router.post('/location',authMiddlware.auth,userDetails.locationDetails)

module.exports=router