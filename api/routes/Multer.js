import { Router } from "express";
import multer from "multer";
const multerRouter = Router();

// Multer
const fileEngineStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads/images");
  },
  filename: (req, file, cb) => {
    const ext = file.originalname.split(".");
    cb(null, Date.now() + "-" + "Demo image" + "." + ext.slice(-1));
  },
});
const upload = multer({ storage: fileEngineStorage });

multerRouter.post("/single", upload.single("image"), async (req, res) => {
  res.send(`Single File of ${req.file.size / 1000}kb uploaded successful`);
});

multerRouter.post("/multiple", upload.array("images", 5), async (req, res) => {
  var totalFileSize = 0;
  req.files.map((x) => {
    totalFileSize += x.size;
  });
  res.send(`Multiple File of ${totalFileSize / 1000}kb uploaded successful`);
});
export default multerRouter;
