import pool from "../config/db.js"
import bcrypt from "bcrypt"

export async function createUser(req, res) {
    try {
        const user_name = req.body.name;
        const user_email = req.body.email;
        const user_password = req.body.password;
        const user_profilePicUrl = req.body.profilePicUrl;
        const user_genderIdentity = req.body.genderIdentity;
        const user_occupation = req.body.occupation;
        const user_bio = req.body.bio;
        const user_resumeAttached = req.body.resumeAttached;

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(user_name && user_password && user_email && emailRegex.test(user_email)){
            const result = await pool.query("SELECT * FROM users WHERE email = $1", [user_email]);
            if(result.rows.length === 0) {
                const hashed_password = await bcrypt.hash(user_password, 10);
                await pool.query("INSERT INTO users(name, email, password, profilePicUrl, genderIdentity, occupation, bio, resumeAttached) VALUES($1, $2, $3, $4, $5, $6, $7, $8)",
                    [user_name, user_email, hashed_password, user_profilePicUrl, user_genderIdentity, user_occupation, user_bio, user_resumeAttached]);
                    console.log("User created successfully");
                return res.status(201).json({message: "User created successfully"});
            } else {
                return res.status(409).json({message: "Email already exists"});
            }
        } else {
            return res.status(400).json({message: "Please provide a valid name, email, and password"});
        }
        
    } catch(err) {
        console.log(err);
        return res.status(500).json({message: "Database error"});
    }
    
}