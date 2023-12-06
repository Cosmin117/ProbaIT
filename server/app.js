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

const express = require("express");
const app = express();
const cors = require("cors");

const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const user = require("./modules/UserModel");
const Poll = require('./modules/PollModel');

app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/Polls");

const connection = mongoose.connection;

const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const collection = require('./modules/UserModel');

// Register User Route
app.post('/register', async (req, res) => {
  try {
    const { email, password } = req.body;

    const existingUser = await collection.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email is already registered' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new collection({
      email,
      password: hashedPassword,
    });

    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Login Route
app.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await collection.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const token = jwt.sign({ _id: user._id }, 'your-secret-key', { expiresIn: '1h' });

    res.cookie("jwt", token, {expire: new Date() + 9999, httpOnly: true, SameSite: 'Lax'})
    res.status(200).json({ token });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});


// // Logout Route with Token
 app.get('/logout', (req, res) => {
   try {
       const token = jwt.sign();
     if (!token) {
       return res.status(401).json({ message: 'No token provided' });
     }
     jwt.verify(token, 'your-secret-key', (err, decoded) => {
       if (err) {
         return res.status(401).json({ message: 'Invalid token' });
       }
      
       res.status(200).json({ message: 'Logout successful' });
     });
   } catch (error) {
     console.error(error);
     res.status(500).json({ message: 'Internal server error' });
   }
 });

app.get('/getLoggedInUser', (req, res) => {
  const user = req.user;
  return res.status(200).json({message: "user is logged in", user})
});

app.get("/polls", async (req, res) => {
  try {
    const polls = await Poll.find();
    res.json({ polls });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.post("/polls", async (req, res) => {
  try {
    const { title, type, options, votes, voteUser  } = req.body;
    // if (!title || !type || !options) {
    //   return res.status(400).json({ error: "Missing required fields" });
    // }

    const newPoll = new Poll({ title, type, options, votes, voteUser });
    await newPoll.save();

    res.status(201).json({ message: "Poll created successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.delete("/polls/:title", async (req, res) => {
  try {
    const title = req.params.title;

    const deletedPoll = await Poll.findOneAndDelete({ title });

    if (!deletedPoll) {
      return res.status(404).json({ error: "Poll not found" });
    }

    res.json({ message: "Poll deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.put("/polls/:title/votes", async (req, res) => {
  try {
    const voteUser = req.params.voteUser;
    const { votes } = req.body;

    if (!votes || typeof votes !== "object") {
      return res.status(400).json({ error: "Invalid votes data" });
    }

    const updatedPoll = await Poll.findOneAndUpdate(
      { voteUser },
      { $set: { votes } },
      { new: true }
    );

    if (!updatedPoll) {
      return res.status(404).json({ error: "Poll not found" });
    }

    res.json({ message: "Poll votes updated successfully", updatedPoll });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});


app.listen(5001, () => {
  console.log("Server is on port 5001");
});
