const mongoose = require("mongoose");

const NotesModel = mongoose.model('notes',{
    title:String,
    Note:String,
    Categories:[]
})

module.exports = {NotesModel}