const express = require('express');
const NoteRouter = express.Router();
const {NotesModel} = require('../model/notes.module')

NoteRouter.get("/",(req,res)=>{
    res.send("Notes");
})


module.exports = {NoteRouter};