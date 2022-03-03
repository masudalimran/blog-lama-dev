import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    shortDesc: String,
    postPic: {
      type: String,
      default: "https://picsum.photos/500/300",
    },
    username: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    fullPost: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Post", postSchema);
