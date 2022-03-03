import mongoose from "mongoose";

const categorySchema = new mongoose.Schema(
  {
    catName: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Category", categorySchema);
