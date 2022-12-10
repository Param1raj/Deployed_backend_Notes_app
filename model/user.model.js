const mongoose = require("mongoose");

const UserModel = mongoose.model('user',{
    email:String,
    password:String,
    name:String,
    age:Number
})


module.exports = {UserModel};