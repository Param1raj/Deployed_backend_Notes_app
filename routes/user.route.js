const express = require("express");
const UserRouter = express.Router();
const { UserModel } = require("../model/user.model");
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
// const { response } = require("express");

UserRouter.post('/signup', async (req, res) => {
    let { email, password, name, age } = req.body;
    console.log(req.body);
    try {
        let data = await UserModel.find({ email });
        console.log(data);
        if (data.length <= 0) {
            bcrypt.hash(password, 3).then(async function (hash) {
                // Store hash in your password DB.
                let user = await UserModel.insertMany([{ email, password: hash, name, age }]);
                // await user.save();
                res.send("Register")
            });
            res.send("User already exist, please login");
        }
        else {
            res.send("User Already exist, please login");
        }
    } catch (error) {
        res.send("Something Wents Wrong");
        console.log(error);
    }
})

UserRouter.post('/login', async (req, res) => {
    let { email, password } = req.body;
    try {
        let user = await UserModel.find({ email });
        console.log(user);
        if (user.length > 0) {
            // res.send("yes")
            bcrypt.compare(password, user[0].password).then(function (result) {
                // result == true
                if (result) {
                    var token = jwt.sign({ id:user[0]._id }, 'hush');
                    res.send({
                        "masseage":"OK",
                        "token":token
                    });
                } else {
                    res.send("bad")
                }
            });
        } else {
            res.send("Something Wents Wrong!");
        }
    } catch (error) {
        console.log(error);
        res.send("Something Wents Wrong!");

    }
})


module.exports = { UserRouter }