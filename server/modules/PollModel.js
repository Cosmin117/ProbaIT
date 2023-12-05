// import modules
const mongoose = require("mongoose");

const PollSchema = new mongoose.Schema({
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
    }
})

const PollModel = new mongoose.model("polls", PollSchema);
module.exports = { PollModel };