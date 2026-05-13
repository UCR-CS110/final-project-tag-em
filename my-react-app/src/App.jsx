import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import events from "./events.jsx";
import profile from "./profile.jsx";
import "./App.css"

export default function App() {
    return (
        <BrowserRouter>
            <nav>
                <Link to ="/Events">Events</Link>
                <Link to ="/Profile">Profile</Link>
            </nav>
            <Routes>
                <Route path="/events.jsx" element={<events />}/>
                <Route path="/profile.jsx" element={<profile />}/>
            </Routes>
        </BrowserRouter>
    );
}