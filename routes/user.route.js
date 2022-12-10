const express = require("express");
const UserRouter = express.Router();
const {UserModel} = require("../model/user.model");
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

UserRouter.post('/signup',async(req,res)=>{
    let {email,password,name,age} = req.body;
    console.log(req.body);
    try {
        let data = await UserModel.find({email});
        console.log(data);
        if(data.length <= 0){   
            bcrypt.hash(password, 3).then(async function(hash) {
                // Store hash in your password DB.
                let user = await UserModel.insertMany([{email,password:hash,name,age}]);
                // await user.save();
                res.send("Register")
            }); 
            res.send("User already exist, please login");
        }
        else {
            res.send("User Already exist, please login");
        }
    } catch(error) {
        res.send("Something Wents Wrong");
        console.log(error);
    }
})

UserRouter.post('/login',async(req,res)=>{
    let payload = req.body;
    try {
        
    } catch (error) {
        console.log(error);
    }
    // res.send("logedin")
})


module.exports = {UserRouter}