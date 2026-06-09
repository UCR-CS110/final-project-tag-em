import pool from "../config/db.js"

export async function getUsers(req, res) {
    try {
        const users = await pool.query('SELECT id, name, email, "profilePicUrl" from users');
        const people = [];
      for(let i = 0; i < users.rows.length; i++) {
        if(users.rows[i].name.toLowerCase().startsWith(req.query.search.toLowerCase()) && req.query.search.length != 0) {
          people.push(users.rows[i]);
        }
      }
      res.send(people);
        
    } catch(err) {
        console.log(err);
        res.status(500).json({message: "Database error"});
    }
}
