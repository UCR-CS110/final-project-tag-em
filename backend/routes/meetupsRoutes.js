import express from "express";
import { getMeetups, getMeetupById, createMeetup, updateMeetup, deleteMeetup } from "../controllers/meetupsController.js";

const router = express.Router();

router.get("/", getMeetups);
router.get("/:id", getMeetupById);
router.post("/", createMeetup);
router.put("/:id", updateMeetup);
router.delete("/:id", deleteMeetup);

export default router;