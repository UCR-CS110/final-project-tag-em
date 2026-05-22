import { useState } from "react";
import "./Meetups.css";

const events = [
  {
    id: 1,
    name: "React Workshop",
    location: "Riverside",
    date: "June 10, 2026",
  },
  {
    id: 2,
    name: "AI Hackathon",
    location: "Los Angeles",
    date: "June 15, 2026",
  },
  {
    id: 3,
    name: "Web Dev Meetup",
    location: "Riverside",
    date: "June 20, 2026",
  },
  {
    id: 4,
    name: "Startup Networking Night",
    location: "San Diego",
    date: "June 25, 2026",
  },
];


export default function Meetups () {
  const [nameFilter, setNameFilter] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [dateFilter, setDateFilter] = useState("");

  const filteredEvents = events.filter((event) => {
    const matchesName = event.name
      .toLowerCase()
      .includes(nameFilter.toLowerCase());

    const matchesLocation = event.location
      .toLowerCase()
      .includes(locationFilter.toLowerCase());

    const matchesDate = dateFilter === "" || event.date === dateFilter;

    return matchesName && matchesLocation && matchesDate;
  });

  return (
    <main className="events-page">
      <h1>Events</h1>

      <div className="filters">
        <input
          type="text"
          placeholder="Filter by event name"
          value={nameFilter}
          onChange={(e) => setNameFilter(e.target.value)}
        />

        <input
          type="text"
          placeholder="Filter by location"
          value={locationFilter}
          onChange={(e) => setLocationFilter(e.target.value)}
        />

        <input
          type="date"
          value={dateFilter}
          onChange={(e) => setDateFilter(e.target.value)}
        />
      </div>

      <section className="event-list">
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event) => (
            <article className="event-card" key={event.id}>
              <h2>{event.name}</h2>
              <p>
                <strong>Location:</strong> {event.location}
              </p>
              <p>
                <strong>Date:</strong> {event.date}
              </p>
            </article>
          ))
        ) : (
          <p className="no-events">No events found.</p>
        )}
      </section>
    </main>
  );
}