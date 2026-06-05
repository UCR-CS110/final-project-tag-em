import express from "express";
import {getUsers} from "../controllers/userController.js"
import {getUserProfile} from "../controllers/userController.js"

const router = express.Router();

router.get("/", getUsers);
router.get("/Profile/:email", getUserProfile);

export default router;