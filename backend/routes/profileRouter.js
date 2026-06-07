import express from "express";
import {updateProfile, showProfile} from "../controllers/profileController.js";
import multer from "multer";

const router = express.Router();
const upload = multer({ dest: "uploads/" });

router.put("/:id", upload.fields([
    { name: "image", maxCount: 1 },
    { name: "resume", maxCount: 1 }
  ]), updateProfile);
router.get("/:id", showProfile);

export default router;
