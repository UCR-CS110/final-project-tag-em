import { Link } from "react-router-dom";
import { useState } from "react";
import "./Auth.css";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [profilePicUrl, setProfilePicUrl] = useState("");
  const [genderIdentity, setGenderIdentity] = useState("");
  const [occupation, setOccupation] = useState("");
  const [bio, setBio] = useState("");
  const [resumeAttached, setResumeAttached] = useState(false);

  async function handleSubmit(e){
    e.preventDefault();
  
    if(password !== confirmPassword){
      setMessage("Passwords do not match");
      return;
    }
    const userInfo = {
      name,
      email,
      password,
      profilePicUrl,
      genderIdentity,
      occupation,
      bio,
      resumeAttached
    };
    const API_URL = "http://localhost:5001/api/auth/signup"
    try{
      const response = await fetch(API_URL,{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userInfo) 
      });
      const data = await response.json();
      if (response.ok) {
        console.log("Success", data);
        setMessage("Account created successfully!");
      } else {
        throw new Error(data.message || "Failed to create account");
      }
    } catch(err) {
      console.log('Error sending data:', err);
      setMessage("Error creating account. Please try again.");
    }
  }
  return (
    <div className="auth-page">
      <div className="auth-card">
        <h1>Create account</h1>
        <p> Account Creation Successful! Feel free to log in!</p>
        {message && <p className="auth-message">{message}</p>}

        <form onSubmit={handleSubmit}>
          <label>Full Name</label>
          <input
            type="text"
            placeholder="Enter your full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label>Profile Picture URL</label>
          <input
            type="text"
            placeholder="Enter a URL for your profile picture"
            value={profilePicUrl}
            onChange={(e) => setProfilePicUrl(e.target.value)}
          />
          <label>Pronouns</label>
          <input
            type="text"
            placeholder="Enter your preferred pronouns"
            value={genderIdentity}
            onChange={(e) => setGenderIdentity(e.target.value)}
          />
          <label>Occupation</label>
          <input
            type="text"
            placeholder="Enter your occupation"
            value={occupation}
            onChange={(e) => setOccupation(e.target.value)}
          />
          <label>Bio</label>
          <textarea
            placeholder="Tell us about yourself"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          />
           <label>
            <input
              type="checkbox"
              checked={resumeAttached}
              onChange={(e) => setResumeAttached(e.target.checked)}
            />
            Attach Resume
          </label>
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Create a password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <label>Confirm Password</label>
          <input 
            type="password"
            placeholder="Confirm your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}/>

          <button type="submit">Sign Up</button>
        </form>

        <p className="auth-switch">
          Already have an account? <Link to="/">Log in</Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;