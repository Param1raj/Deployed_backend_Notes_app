const mongoose = require("mongoose");
require('dotenv').config();

const connection = mongoose.connect(process.env.URL,()=>{
    console.log("Connect");
})

module.exports = {connection};