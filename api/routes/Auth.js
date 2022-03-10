import express from "express";
import User from "../models/UsersModel.js";
const authRouter = express.Router();
import {} from "dotenv/config";

// bcrypt Stuff
import bcrypt from "bcrypt";
const saltRound = Number(process.env.BCRYPT_SALT) || 5;
const salt = bcrypt.genSaltSync(saltRound);

// Registration Route
authRouter.post("/register", async (req, res) => {
  try {
    const emailExist = await User.findOne({ email: req.body.email });
    const usernameExist = await User.findOne({ username: req.body.username });
    if (usernameExist)
      res.status(500).json({ message: "Username already exist" });
    else if (emailExist)
      res.status(500).json({ message: "Email already exist" });
    else {
      const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, salt),
        profilePic: req.body.profilePic,
      });
      const user = await newUser.save();
      res.json(user);
    }
  } catch (error) {
    res.status(500).json(error.message);
  }
});

// Login Route
authRouter.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      if (bcrypt.compareSync(req.body.password, user.password)) {
        //   Skipping password field as response to user
        const { password, ...others } = user._doc;
        res.send(others);
      } else res.status(400).json({ message: "Invalid Password" });
    } else res.status(400).json({ message: "Invalid Email" });
  } catch (error) {
    res.status(500).json(error.message);
  }
});

export default authRouter;
