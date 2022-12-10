const express = require("express");
const app = express();

const {UserModel} = require('./model/user.model')
const {NotesModel} = require('./model/notes.module')
const { connection } = require("mongoose");
const {UserRouter} = require('./routes/user.route');
const {NoteRouter} = require('./routes/note.route');
require('dotenv').config();

app.use(express.json());
app.use("/notes",NoteRouter);
// console.log(UserRouter);
app.use("/user",UserRouter);

app.get("/",(req,res)=>{
    res.send("Welcome to this api")
})

app.listen(Number(process.env.PORT),async()=>{
    try {
        await connection;

        console.log(`Server is running successfully on the port ${process.env.PORT}`)
    } catch (error) {
        console.log(error)
    }
});