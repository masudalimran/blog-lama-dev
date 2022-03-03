// imports
import express from "express";
const app = express();
import path from "path";
import { fileURLToPath } from "url";
import {} from "dotenv/config";
import mongoose from "mongoose";
import authRouter from "./routes/Auth.js";
// Port define
const PORT = process.env.PORT || "3378";

// Middleware
app.use(express.json());

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

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
