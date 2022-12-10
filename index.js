const express = require("express");
const app = express();
require('dotenv').config();
// console.log(process.env);

app.get("/",(req,res)=>{
    res.send("Hellow")
})

app.listen(Number(process.env.PORT),()=>{
    console.log(`Server is running on the port ${process.env.PORT}`)
});