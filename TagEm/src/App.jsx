import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";
import { useEffect, useState } from 'react';
import Jobs from "./Jobs.jsx";
import Meetups from "./Meetups.jsx";
import Connections from "./Connections.jsx";
import Profile from "./Profile.jsx";
import Login from "./Pages/Login.jsx";
import Signup from "./Pages/Signup.jsx";

import "./App.css"

function NavBar() {
    const location = useLocation();
    const [imgURL, setImgURL] = useState("");

    useEffect(() => {
        async function handleFetch() {
            const user = JSON.parse(localStorage.getItem("user"));

            if (!user) return;

            const API_URL = `http://localhost:5001/api/Profile/${user.id}`;
            const response = await fetch(API_URL);
            const data = await response.json();

            setImgURL(data.profilePicUrl);
        }

        handleFetch();
    }, []);
    
    if (location.pathname === "/" || location.pathname === "/signup") {
        return;
    }
    return (
        <nav>
            <Link to ="/Jobs" className="logoLink"><img src="/tagEmLogo.svg" alt="TagEm Logo" /></Link>

            <div className="navLinks">
                <Link to ="/Jobs">Jobs</Link>
                <Link to ="/Meetups">Meetups</Link>
                <Link to ="/Connections">Connections</Link>
                <Link to ="/Profile">Profile</Link>

            </div>
            <div className="profile-menu">
                <img
                    src={imgURL}
                    alt="Profile"
                    className="nav-profile-pic"
                />

            </div>
        </nav>
    );   
}

export default function App() {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/Jobs" element={<Jobs />}/>
                <Route path="/Meetups" element={<Meetups />}/>
                <Route path="/Connections" element={<Connections />}/>
                <Route path="/Profile" element={<Profile />}/>
            </Routes>
        </BrowserRouter>
    );
}