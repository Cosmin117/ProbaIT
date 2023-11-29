// import modules
const UserModel = require("./modules/UserModel.js")
const PollModel = require('./modules/PollModel.js')
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
require("dotenv").config();

//app
const app = express();
app.use(express.json());

//middleware
app.use(morgan("dev"));
app.use(cors({ origin: true, credentials: true }));

//port
const port = 8080;

app.get("/users", async (req, res) => {
    const users = await UserModel.find({});
    console.log(users);
    res.json(users);
});

app.get("/polls", async (req, res) => {
    const polls = await PollModel.find({});
    console.log(polls);
    res.json(polls);
});

app.post("/polls", async (req, res) => {
    //const poll = await PollModel.create(req);
    console.log(req.body.title);
});

app.post("/polls", async (req, res) => {
    //const poll = await PollModel.create(req);
    console.log(req.body.title);
});

//listener
app.listen(port);