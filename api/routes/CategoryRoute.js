import { Router } from "express";
import Category from "../models/CategoryModel.js";
import { checkIfIdValid } from "../utility.js";
const categoryRouter = Router();

// Create Category
categoryRouter.post("/", async (req, res) => {
  const newCat = new Category(req.body);
  try {
    const savedCategory = await newCat.save();
    res.json(savedCategory);
  } catch (error) {
    res.status(500).json(error.message);
  }
});

// Update Category
categoryRouter.put("/:id", async (req, res) => {
  if (!checkIfIdValid(req.params.id))
    res.status(201).json({ message: "Invalid ID!" });
  else {
    const categoryExist = await Category.findById(req.params.id);
    if (categoryExist) {
      try {
        const updatedCategory = await Category.findByIdAndUpdate(
          req.params.id,
          req.body,
          { new: true }
        );
        res.json(updatedCategory);
      } catch (error) {
        res.status(500).json(error.message);
      }
    } else res.status(201).json({ message: "Category does not exist" });
  }
});

// Delete category
categoryRouter.delete("/:id", async (req, res) => {
  if (!checkIfIdValid(req.params.id))
    res.status(201).json({ message: "Invalid ID!" });
  else {
    const categoryExist = await Category.findById(req.params.id);
    if (categoryExist) {
      try {
        await Category.findByIdAndDelete(req.params.id);
        res.json({
          message: `Category '${categoryExist.catName}' Deleted Successfully!`,
        });
      } catch (error) {
        res.status(500).json(error.message);
      }
    } else res.status(201).json({ message: "Category Does Not Exist!" });
  }
});

// get all category
categoryRouter.get("/", async (req, res) => {
  try {
    const allCategory = await Category.find();
    res.json(allCategory);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// get single Category
categoryRouter.get("/:id", async (req, res) => {
  if (!checkIfIdValid(req.params.id))
    res.status(201).json({ message: "Invalid ID!" });
  else {
    const categoryExist = await Category.findById(req.params.id);
    if (categoryExist) {
      try {
        const cat = await Category.findById(req.params.id);
        res.json(cat);
      } catch (error) {
        res.status(500).send(error.message);
      }
    } else res.status(201).json({ message: "Category Does Not Exist!" });
  }
});

export default categoryRouter;
