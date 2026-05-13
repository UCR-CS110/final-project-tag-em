import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Events from "./events.jsx";
import Profile from "./profile.jsx";
import "./App.css"

export default function App() {
    return (
        <BrowserRouter>
            <nav>
                <Link to ="/Events">Events</Link>
                <Link to ="/Profile">Profile</Link>
            </nav>
            <Routes>
                <Route path="/Events" element={<Events />}/>
                <Route path="/Profile" element={<Profile />}/>
            </Routes>
        </BrowserRouter>
    );
}