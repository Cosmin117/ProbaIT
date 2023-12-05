// // import modules
// const UserModel = require('./modules/UserModel.js');
// const PollModel = require('./modules/PollModel.js');
// const express = require("express");
// const morgan = require("morgan");
// const cors = require("cors");
// const mongoose = require('mongoose');
// require("dotenv").config();
// const cookieParser = require('cookie-parser');
// const expressValidator = require('express-validator');
// const { json, urlencoded } = express;

// //app
// const app = express();
// app.use(express.json());

// //middleware
// app.use(morgan("dev"));
// app.use(cors({ origin: true, credentials: true }));
// app.use(json());
// app.use(urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(expressValidator());

// mongoose.connect("mongodb://localhost:27017/Polls", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     })
//     .then(() => console.log("DB CONNECTED"))
//     .catch((err) => console.log("DB CONNECTION ERROR", err));

// //port
// const port = 8080;

// const userRoutes = require("./routes/user");
// app.use("/", userRoutes);

// app.get('/users', async (req, res) => {
//     try {
//         const users = await UserModel.find();
//         return res.status(200).json(users);
//     } catch (error) {
//         return res.status(500).json({ error: error.message});
//     }
// });

// app.post('/users', async (req, res) => {
//     try {
//         const { email, password } = req.body;
//         const user = new UserModel({ email, password });
//         await user.save();
//         return res.status(201).json(user);
//     } catch (error) {
//         return res.status(500).json({error: error.message});
//     }
// });

// app.get("/polls", async (req, res) => {
//     //const polls = await PollModel.find({});
//     console.log(polls);
//     res.json(polls.body.title);
// });

// app.post("/polls", async (req, res) => {
//     //const poll = await PollModel.create(req);
//     console.log(req.body.title);
//     res.send("mort");
// });

// //listener
// app.listen(port);

const express = require('express');
const app = express();
const cors = require('cors');

const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const User = require('./modules/UserModel');
// const Poll = require('./models/poll.model');

app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/Polls');

const connection = mongoose.connection;

app.get('/users' , async (req, res) => {
  try {
    const users = await User.find();
    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

app.post('/users', async (req, res) => {
  try {
             const { email, password } = req.body;
             const user = new User({ email, password });
             await user.save();
             return res.status(201).json(user);
         } catch (error) {
             return res.status(500).json({error: error.message});
         }
})

app.listen(5001, () => {
  console.log('Server is on port 5001');
})