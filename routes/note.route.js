const express = require('express');
const NoteRouter = express.Router();
const {NotesModel} = require('../model/notes.module')

NoteRouter.get("/",async(req,res)=>{
    // res.send("Notes");
    // let payload = req.body;
    try {
        let data = await NotesModel.find();
        res.send(data);
    } catch (error) {
        console.log(error);
    }
})


NoteRouter.post("/create",async (req,res)=>{
    let {title,Note,Categories,user_id} = req.body;
    console.log(user_id);
    try {
        let Notes = await NotesModel({title,Note,Categories,user_id});
        Notes.save();
        res.send("Ok"); 
    } catch (error) {
        console.log(error);
    }
})

NoteRouter.patch("/update/:id",async (req,res)=>{
    let id = req.params.id;
    let user_id = req.body.user_id;
    let payload = req.body;
    try {
        let note = await NotesModel.findOne({_id:id});
        console.log(note);
        if(note.user_id === user_id){
            await NotesModel.findByIdAndUpdate({_id:id},payload);
            res.send({
                "msg":"update"
            });
            
        }else {
            res.send("Note doesn't exist")
        }     
    } catch (error) {
        console.log(error);
    }
})

NoteRouter.delete("/delete/:id",async (req,res)=>{
    let id = req.params.id;
    let user_id = req.body.user_id;
    let payload = req.body;
    try {
        let note = await NotesModel.findOne({_id:id});
        console.log(note);
        if(note.user_id === user_id){
            await NotesModel.findByIdDelete({_id:id});
            res.send({
                "msg":"update"
            });
            
        }else {
            res.send("Note doesn't exist")
        }     
    } catch (error) {
        console.log(error);
    }
})


module.exports = {NoteRouter};