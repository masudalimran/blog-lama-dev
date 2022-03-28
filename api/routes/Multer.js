import { Router } from "express";
import multer from "multer";
const multerRouter = Router();

// Multer
const fileEngineStorageUser = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads/images/user");
  },
  filename: (req, file, cb) => {
    // const ext = file.originalname.split(".");
    // cb(null, Date.now() + "-DemoImage." + ext.slice(-1));
    cb(null, req.body.name);
  },
});
const uploadUser = multer({ storage: fileEngineStorageUser });
const fileEngineStoragePost = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads/images/post");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});
const uploadPost = multer({ storage: fileEngineStoragePost });

multerRouter.post(
  "/userPP",
  uploadUser.single("profilePic"),
  async (req, res) => {
    res.json({
      message: `Updated Successfully, ${req.file.size / 1000}kb uploaded...`,
    });
  }
);

multerRouter.post(
  "/blogImg",
  uploadPost.single("blogImg"),
  async (req, res) => {
    res.json({
      message: `Updated Successfully, ${req.file.size / 1000}kb uploaded...`,
    });
  }
);

// multerRouter.post("/multiple", upload.array("images", 5), async (req, res) => {
//   var totalFileSize = 0;
//   req.files.map((x) => {
//     totalFileSize += x.size;
//   });
//   res.send(`Multiple File of ${totalFileSize / 1000}kb uploaded successful`);
// });
export default multerRouter;
