const express = require("express");
const UserRouter = express.Router();
const {UserModel} = require("../model/user.model")

UserRouter.post('/signup',async(req,res)=>{
    let payload = req.body;
    try {
        let data = await UserModel.find({email});
        if(data.length <= 0){
            
        }
    } catch (error) {
        console.log(error);
    }
    res.send("Signing");
})


UserRouter.post('/login',(req,res)=>{
    res.send("logedin")
})


module.exports = {UserRouter}