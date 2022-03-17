import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    profilePic: {
      type: String,
      default: "https://picsum.photos/500/500",
    },
    subscriber: {
      type: Boolean,
      default: false,
    },
    address: String,
    religion: String,
    maritalStatus: String,
    fatherName: String,
    motherName: String,
    companyName: String,
    occupation: String,
    hobbies: String,
    socialMedia: Array,
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);
export default User;
