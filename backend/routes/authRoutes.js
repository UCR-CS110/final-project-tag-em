import express from "express";
import {createUser} from "../controllers/authController.js"
import passport from "../config/passport.js"

const router = express.Router();

router.post("/signup", createUser);
router.post("/login", passport.authenticate("local", {session: false}), (req,res)=>{
    res.json({
        id: req.user.id,
        name: req.user.name,
        email: req.user.email
    });
});

export default router;