import "./Connections.css"
import ConnectionCard from "./ConncetionCard"
export default function Connections () {
    return (
        <div class="Connections">
            <h1>Connections</h1>
            <input
                type = "text"
                placeholder = "Find connections"
            />
            <ConnectionCard
                name="Alex Johnson"
                role="Computer Science Student"
                mutuals={4}
                status="Connect"
            />

            <ConnectionCard
                name="Maria Lee"
                role="Frontend Developer"
                mutuals={2}
                status="Message"
            />

        </div>
    );
}