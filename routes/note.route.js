const express = require('express');

const NoteRouter = express.Router();

NoteRouter.get("/",(req,res)=>{
    res.send("Notes");
})


module.exports = {NoteRouter};