// import modules
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");
require("dotenv").config();

//app
const app = express();

//db
mongoose.connect("mongodb://localhost:27017/Polls");

//middleware
app.use(morgan("dev"));
app.use(cors({ origin: true, credentials: true }));

//routes

//port
const port = 8080;

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    password : String,
})

const UserModel = new mongoose.model("polls", UserSchema);
UserModel.create({name: "Cosmin", email: "csm.ga@gm.com", password: "sfjaufda"})

app.get("/getPolls", async (req, res) => {
    const users = await UserModel.find({});
    console.log(users);
    //const isUser = await UserModel.exists({age: "salam"});
    //console.log(isUser);
    res.send("mortii matii");
});

//listener
app.listen(port);