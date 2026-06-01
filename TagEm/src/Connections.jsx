import "./Connections.css";

function Connections() {
  const people = [
    {
      name: "jayanth",
      role: "Computer Science Student",
      mutuals: "12 mutual connections",
      img: "https://myimg"
    },
    {
      name: "Gabriel",
      role: "Frontend Developer",
      mutuals: "8 mutual connections",
      img: "https://myimg"
    },
  ];

  return (
    <div className="connections-page">
      <div className="connections-header">
        <h1>Connections</h1>
        <input type="text" placeholder="Search connections..." />
      </div>

      <div className="filter-buttons">
        <button>All</button>
        <button>Recruiters</button>
      </div>

      <div className="connections-grid">
        {people.map((person, index) => (
          <div className="connection-card" key={index}>
            <img src={person.img} alt={person.name} />
            <h3>{person.name}</h3>
            <p>{person.role}</p>
            <span>{person.mutuals}</span>

            <div className="card-buttons">
              <button className="message-btn">Message</button>
              <button className="remove-btn">Remove</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Connections;