import { Router } from "express";
import Category from "../models/CategoryModel.js";
import Post from "../models/PostsModel.js";
import User from "../models/UsersModel.js";
import { checkIfIdValid } from "../utility.js";
const postRouter = Router();

// Create Post
postRouter.post("/", async (req, res) => {
  const titleExist = await Post.findOne({ title: req.body.title });
  if (!titleExist) {
    try {
      const newPost = new Post(req.body);
      const savedPost = await newPost.save();
      res.json(savedPost);
    } catch (error) {
      res.status(500).json(error.message);
    }
  } else {
    res
      .status(201)
      .json({ message: `Title '${req.body.title}' already exist!` });
  }
});

// Get Single Post
postRouter.get("/:id", async (req, res) => {
  if (!checkIfIdValid(req.params.id))
    res.status(201).json({ message: "ID invalid contains > 24 character" });
  else {
    const postExist = await Post.findOne({ _id: req.params.id });
    if (postExist) {
      try {
        res.json(postExist);
      } catch (error) {
        res.status(500).json(error.message);
      }
    } else {
      res.status(201).json({ message: "No such post exist!" });
    }
  }
});

// Get All || Post By User || Post By Category
postRouter.get("/", async (req, res) => {
  const userId = req.query.user;
  const categoryId = req.query.category;
  if (userId) {
    if (!checkIfIdValid(userId))
      res.status(201).json({ message: "Invalid ID!" });
    else {
      const userExists = await User.findById(userId);
      if (userExists) {
        try {
          const postByUser = await Post.find({ userId });
          res.json(postByUser);
        } catch (error) {
          res.status(500).json(error.message);
        }
      } else {
        res.status(201).json({ message: "No such post exist!" });
      }
    }
  } else if (categoryId) {
    if (!checkIfIdValid(categoryId))
      res.status(201).json({ message: "Invalid ID!" });
    else {
      const categoryExists = await Category.findById(categoryId);
      if (categoryExists) {
        try {
          const postByCat = await Post.find({
            categoryId: categoryId,
          });
          res.json(postByCat);
        } catch (error) {
          res.status(500).json(error.message);
        }
      } else res.status(201).json({ message: "Category Does Not Exist!" });
    }
  } else {
    const allPosts = await Post.find();
    const postCount = Object.keys(allPosts).length;
    res.json({ posts: allPosts, postCount });
  }
});

// Update Post
postRouter.put("/:id", async (req, res) => {
  if (!checkIfIdValid(req.params.id) || !checkIfIdValid(req.body.userId))
    res.status(201).json({ message: "ID invalid contains > 24 character" });
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
    } else res.status(201).json({ message: "You can only update your post" });
  }
});

//  Delete Post
postRouter.delete("/:id", async (req, res) => {
  if (!checkIfIdValid(req.params.id) || !checkIfIdValid(req.body.userId))
    res.status(201).json({ message: "ID invalid" });
  else {
    const post = await Post.findById(req.params.id);
    if (post.userId.toString() === req.body.userId) {
      try {
        await Post.findByIdAndDelete(req.params.id);
        res.json({ message: "Post deleted successfully!" });
      } catch (error) {
        res.status(500).json(error.message);
      }
    } else res.status(201).json({ message: "You can only delete your post" });
  }
});

export default postRouter;
