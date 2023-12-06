// import modules
const mongoose = require("mongoose");

const Poll = new mongoose.Schema({
    title: {
        type:String,
        required:true
    },
    type: {
        type:Boolean,
        required:true
    }, 
    options: {
        type: Object,
        require: true
    },
    votes: {
        type: Object,
    },
    voteUser: {
        type: String,
    }

})

const polluri = new mongoose.model("polls", Poll);
module.exports = polluri;