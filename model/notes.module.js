const mongoose = require("mongoose");

const NotesModel = mongoose.model('notes',{
    title:String,
    Note:String,
    Categories:[],
    user_id:String
})

module.exports = {NotesModel}