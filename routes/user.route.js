const express = require("express");

const UserRouter = express.Router();

UserRouter.post('/signup',async(req,res)=>{
    let payload = req.body;
    console.log(payload);
    res.send("Signing");
})


UserRouter.post('/login',(req,res)=>{
    res.send("logedin")
})


module.exports = {UserRouter}