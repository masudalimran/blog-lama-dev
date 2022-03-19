import { Router } from "express";
const userRouter = Router();
import User from "../models/UsersModel.js";
import Post from "../models/PostsModel.js";
import fs from "fs";
const imagePath = "./uploads/images/";

// bcrypt stuff
import bcrypt from "bcrypt";
const saltRound = Number(process.env.BCRYPT_SALT) || 5;
const salt = bcrypt.genSaltSync(saltRound);

// Get User
userRouter.get("/:id", async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.params.id });
    const { password, ...others } = user._doc;
    res.json(others);
  } catch (error) {
    res.status(201).json({ message: "User does not exist!!" });
  }
});

// Update user information Route
userRouter.put("/:id", async (req, res) => {
  if (req.body._id === req.params.id) {
    const user = await User.findById(req.params.id);
    if (req.body.password !== "") {
      req.body.password = await bcrypt.hashSync(req.body.password, salt);
    } else req.body.password = user.password;
    if (req.body.prevImg) {
      fs.unlink(imagePath + req.body.prevImg, (err) => {
        if (err) {
          console.error(err);
          return;
        }
      });
    }

    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          new: true,
        }
      );
      const { password, ...others } = updatedUser._doc;
      res.send(others);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  } else
    res.status(201).json({ message: "You can only update in your account" });
});

// Delete User keeping his/her Posts
userRouter.delete("/:id", async (req, res) => {
  if (req.body._id === req.params.id) {
    try {
      const deletedUser = await User.findById(req.params.id);
      //   TODO Divert all post's author rights to Admin
      await User.findByIdAndDelete(req.body._id);
      res.json({
        message: `User ${deletedUser.username} has been deleted successfully!`,
      });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  } else res.status(201).json({ message: "User Not Found!" });
});

// Delete User & his/her Posts
userRouter.delete("/with-post/:id", async (req, res) => {
  if (req.body._id === req.params.id) {
    try {
      const deletedUser = await User.findById(req.params.id);
      await Post.deleteMany({ userId: deletedUser._id });
      await User.findByIdAndDelete(req.body._id);
      res.json({
        message: `User ${deletedUser.username} and his/her post has been deleted successfully!`,
      });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  } else res.status(201).json({ message: "User Not Found!" });
});

export default userRouter;
