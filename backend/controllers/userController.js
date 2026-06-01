import pool from "../config/db.js"

export async function getUsers(req, res) {
    try {
        const users = await pool.query('SELECT * from users');
        console.log(users.rows);
        res.json(users.rows);
        
    } catch(err) {
        console.log(err);
        res.status(500).json({message: "Database error"});
    }
    
}