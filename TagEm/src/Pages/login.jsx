import { Link, useNavigate  } from "react-router-dom";
import { useState } from "react";
import "./Auth.css";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  async function handleSubmit(e){
    e.preventDefault();

    const userInfo = {
      email,
      password
    };

    const API_URL = "http://localhost:5001/api/auth/login";
    try{
      const response = await fetch(API_URL,{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userInfo) 
      });
      const data = await response.json();
      localStorage.setItem("user", JSON.stringify(data));
      console.log("hi");
      navigate("/Profile");
    } catch(err) {
      console.log("Error sending data:", err);
    }
  }
  return (
    <div className="auth-page">
      <div className="auth-card">
        <h1>Welcome back</h1>
        <p>Log in to continue building your network.</p>

        <form onSubmit={handleSubmit}>
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />

          <label>Password</label>
          <input 
            type="password"
            placeholder="Enter your password" 
            value = {password}
            onChange={(e)=>setPassword(e.target.value)}
          />

          <button type="submit">Log In</button>
        </form>

        <p className="auth-switch">
          Dont have an account? <Link to="/signup">Create one</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;