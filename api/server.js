// imports
import express from "express";
const app = express();
import path from "path";
import { fileURLToPath } from "url";
import cors from "cors";
import {} from "dotenv/config";
import mongoose from "mongoose";
import authRouter from "./routes/Auth.js";
import userRouter from "./routes/UserRoute.js";
import postRouter from "./routes/PostRoute.js";
import categoryRouter from "./routes/CategoryRoute.js";
import multerRouter from "./routes/Multer.js";
// Port define
const PORT = process.env.PORT || "3378";

// Middleware
app.use(express.json());
app.use(cors());

// Mongoose Connection
mongoose.connect(
  process.env.DB_CONNECTION || "mongodb://localhost:27017/lamaDevAuth",
  () => {
    if (process.env.DB_CONNECTION) {
      console.log("Connected to MongoDB Database");
    } else {
      console.log("Connected to Local MongoDB Database");
    }
  },
  (err) => {
    console.err(err);
  }
);

// manage filename & dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/index.html"));
});

// Routes
app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);
app.use("/api/post", postRouter);
app.use("/api/category", categoryRouter);
// For upload -> Multer
app.use("/api/uploads", multerRouter);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
