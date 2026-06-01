import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import pool from "./config/db.js";
import Router from "./routes/userRoutes.js";
import authRouter from "./routes/authRoutes.js";
import passport from "passport";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/users", Router);
app.use("/api/auth", authRouter);
app.use(passport.initialize())

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
    console.log(`Server running on Port ${PORT}`)
})
