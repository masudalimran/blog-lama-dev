import { Router } from "express";
import Post from "../models/PostsModel.js";
import User from "../models/UsersModel.js";
import { checkIfIdValid } from "../utility.js";
const postRouter = Router();

// Create Post
postRouter.post("/", async (req, res) => {
  const titleExist = await Post.findOne({ title: req.body.title });
  if (!titleExist) {
    const newPost = new Post(req.body);
    try {
      const savedPost = await newPost.save();
      res.json(savedPost);
    } catch (error) {
      res.status(500).json(error.message);
    }
  } else {
    res
      .status(401)
      .json({ message: `Title '${req.body.title}' already exist!` });
  }
});

// Get Post
postRouter.get("/:id", async (req, res) => {
  if (!checkIfIdValid(req.params.id))
    res.status(401).json({ message: "ID invalid contains > 24 character" });
  else {
    const postExist = await Post.findOne({ _id: req.params.id });
    if (postExist) {
      try {
        res.json(postExist);
      } catch (error) {
        res.status(500).json(error.message);
      }
    } else {
      res.status(401).json({ message: "No such post exist!" });
    }
  }
});

// Get All Post
postRouter.get("/", async (req, res) => {
  const allPosts = await Post.find();
  const postCount = Object.keys(allPosts).length;
  res.json({ posts: allPosts, postCount });
});

// Update Post
postRouter.put("/:id", async (req, res) => {
  if (!checkIfIdValid(req.params.id) || !checkIfIdValid(req.body.userId))
    res.status(401).json({ message: "ID invalid contains > 24 character" });
  else {
    const post = await Post.findById(req.params.id);
    if (post.userId.toString() === req.body.userId) {
      try {
        const updatedPost = await Post.findByIdAndUpdate(
          req.params.id,
          req.body,
          {
            new: true,
          }
        );
        res.json(updatedPost);
      } catch (error) {
        res.status(500).json(error.message);
      }
    } else res.status(401).json({ message: "You can only update your post" });
  }
});

//  Delete Post
postRouter.delete("/:id", async (req, res) => {
  if (!checkIfIdValid(req.params.id) || !checkIfIdValid(req.body.userId))
    res.status(401).json({ message: "ID invalid" });
  else {
    const post = await Post.findById(req.params.id);
    if (post.userId.toString() === req.body.userId) {
      try {
        await Post.findByIdAndDelete(req.params.id);
        res.json({ message: "Post deleted successfully!" });
      } catch (error) {
        res.status(500).json(error.message);
      }
    } else res.status(401).json({ message: "You can only delete your post" });
  }
});

export default postRouter;
