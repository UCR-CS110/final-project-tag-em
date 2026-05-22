import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Jobs from "./Jobs.jsx";
import Meetups from "./Meetups.jsx";
import Connections from "./Connections.jsx";
import Profile from "./Profile.jsx";

import "./App.css"

export default function App() {
    return (
        <BrowserRouter>
            <nav>
                <Link to ="/Jobs">Jobs</Link>
                <Link to ="/Meetups">Meetups</Link>
                <Link to ="/Connections">Connections</Link>
                <Link to ="/Profile">Profile</Link>
            </nav>
            <Routes>
                <Route path="/Jobs" element={<Jobs />}/>
                <Route path="/Meetups" element={<Meetups />}/>
                <Route path="/Connections" element={<Connections />}/>
                <Route path="/Profile" element={<Profile />}/>
            </Routes>
        </BrowserRouter>
    );
}