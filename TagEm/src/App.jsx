import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";
import Jobs from "./Jobs.jsx";
import Meetups from "./Meetups.jsx";
import Connections from "./Connections.jsx";
import Profile from "./Profile.jsx";
import Login from "./Pages/Login.jsx";
import Signup from "./Pages/Signup.jsx";

import "./App.css"

function NavBar() {
    const location = useLocation();
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