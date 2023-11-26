const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/Polls");

const PollSchema = new mongoose.Schema({
    title: String, 
    votingType: Boolean, 
    options: Array
});

const PollModel = new mongoose.model("polls", PollSchema);
module.export = { PollModel }; 