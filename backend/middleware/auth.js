const auth=(req,res)=>{
    var token = req.cookies['token'];
    res.json({token})
console.log("token",token)

}


module.exports={auth}