const mongoose = require("mongoose");

const connection = mongoose.connect('mongodb+srv://paramraj:charu@cluster0.f8qnm6n.mongodb.net/Note_app?retryWrites=true&w=majority')

module.exports = {connection};