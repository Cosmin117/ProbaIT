// import modules
const mongoose = require("mongoose");

//db
mongoose.connect("mongodb://localhost:27017/Polls");

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
})

const UserModel = new mongoose.model("users", UserSchema);
module.exports = { UserModel };