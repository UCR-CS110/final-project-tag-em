import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import pool from "./config/db.js";
import Router from "./routes/userRoutes.js";
import authRouter from "./routes/authRoutes.js";
import connectionRouter from "./routes/connectionRoutes.js";
import profileRouter from "./routes/profileRouter.js";
import passport from "passport";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(passport.initialize())
app.use("/api/users", Router);
app.use("/api/auth", authRouter);
app.use("/api/getUsers", connectionRouter);
app.use("/api/Profile", profileRouter);
app.use("/uploads", express.static("uploads"));
app.use("/api/connections", connectionRouter);


const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
    console.log(`Server running on Port ${PORT}`)
})
