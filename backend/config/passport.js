import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import pool from "../config/db.js"
import bcrypt from "bcrypt";

passport.use(new LocalStrategy ({
      usernameField: "email", passwordField: "password"
    },(async function verify(user_email, user_password, cb) {
    try{
        const result = await pool.query("SELECT * FROM users WHERE email = $1", [user_email]);
        if(result.rows.length === 0) {
            return cb(null, false, { message: 'Incorrect username or password.' });
        }
        const user = result.rows[0];
        const hashed_password = user["password"];
        const match = await bcrypt.compare(user_password, hashed_password);

        if(!match) {
            return cb(null, false, { message: 'Incorrect username or password.' });
        } else {
            console.log("Login successful");
            return cb(null, user);
        }
    } catch(err) {
        return cb(err);
    }
})));

export default passport;

