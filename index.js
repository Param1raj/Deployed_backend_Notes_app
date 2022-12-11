const express = require("express");
const app = express();

const { connection } = require("./config/db");
const {UserRouter} = require('./routes/user.route');
const {NoteRouter} = require('./routes/note.route');
require('dotenv').config();
const {Authentication} = require("./middleware/authentication");


app.use(express.json());
// console.log(UserRouter);
app.use("/user",UserRouter);

app.get("/",(req,res)=>{
    res.send("Welcome to this api")
})
app.use(Authentication);
app.use("/notes",NoteRouter);
app.listen(Number(process.env.PORT),async()=>{
    try {
        await connection;
        console.log(`Server is running successfully on the port ${process.env.PORT}`)
    } catch (error) {
        console.log(error)
    }
});