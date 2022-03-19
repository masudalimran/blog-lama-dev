import express from "express";
import User from "../models/UsersModel.js";
const authRouter = express.Router();
import {} from "dotenv/config";

// bcrypt Stuff
import bcrypt from "bcrypt";
const saltRound = Number(process.env.BCRYPT_SALT) || 5;
// const saltRound = 5;
const salt = bcrypt.genSaltSync(saltRound);

// Registration Route
authRouter.post("/register", async (req, res) => {
  try {
    const emailExist = await User.findOne({ email: req.body.email });
    const usernameExist = await User.findOne({ username: req.body.username });
    if (usernameExist)
      res.status(201).json({ message: "Username already exist" });
    else if (emailExist)
      res.status(201).json({ message: "Email already exist" });
    else {
      req.body.password = bcrypt.hashSync(req.body.password, salt);
      const newUser = new User(req.body);
      const user = await newUser.save();
      //   Skipping password field as response to user
      const { password, ...others } = user._doc;
      res.json(others);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
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
      } else res.status(201).json({ message: "Invalid Password" });
    } else res.status(201).json({ message: "Invalid Email" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Check Old Password
authRouter.post("/check-pass/:id", async (req, res) => {
  if (req.body._id === req.params.id) {
    try {
      const user = await User.findById(req.params.id);
      if (await bcrypt.compareSync(req.body.password, user.password))
        res.json({ passwordMatched: true });
      else res.json({ passwordMatched: false });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  } else res.status(500).json({ message: "User Not Found" });
});

export default authRouter;
