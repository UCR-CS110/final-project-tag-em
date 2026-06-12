import { useEffect, useState } from "react";
import { useNavigate, Link } from 'react-router-dom';
import "./Connections.css";

function Connections() {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();
  const [search, handleSearch] = useState("");
  const [users, handleUsers] = useState([]);
  const [requests, setRequests] = useState([]);
  const [showRequests, setShowRequests] = useState(false);
  const [connections, setConnections] = useState([]);

  useEffect(()=>{
    displayUsers();
  },[search])

  useEffect(() => {
    displayConnections();
  }, []);

  async function displayRequests() {
    try {
      const response = await fetch(
        `http://localhost:5001/api/connections/requests/${user.id}`
      );

      const data = await response.json();

      if (!response.ok) {
        console.log(data.message);
        return;
      }

      setRequests(data);
      setShowRequests(true);
    } catch (err) {
      console.log("Error receiving requests:", err);
    }
  }

  async function displayConnections() {
    try {
      const response = await fetch(
        `http://localhost:5001/api/connections/${user.id}`
      );

      const data = await response.json();

      if (!response.ok) {
        console.log(data.message);
        return;
      }

      setConnections(data);
      setShowRequests(false);
    } catch (err) {
      console.log("Error receiving connections:", err);
    }
  }

  async function acceptRequest(requestId) {
  try {
    const response = await fetch(
      `http://localhost:5001/api/connections/accept/${requestId}`,
      {
        method: "PUT"
      }
    );

    const data = await response.json();

    if (!response.ok) {
      console.log(data.message);
      return;
    }

    setRequests(requests.filter((request) => request.id !== requestId));
  } catch (err) {
    console.log("Error accepting request:", err);
  }
}

async function rejectRequest(requestId) {
  try {
    const response = await fetch(
      `http://localhost:5001/api/connections/reject/${requestId}`,
      {
        method: "DELETE"
      }
    );

    const data = await response.json();

    if (!response.ok) {
      console.log(data.message);
      return;
    }

    setRequests(requests.filter((request) => request.id !== requestId));
  } catch (err) {
    console.log("Error rejecting request:", err);
  }
}

  async function displayUsers (){
  const API_URL = `http://localhost:5001/api/getUsers/users?search=${search}`;
    try{
      const response = await fetch(API_URL);
      const data = await response.json();
      console.log(data[0]);
      if(!response.ok){
        setError(data.message || "Login failed");
        return;
      }
      handleUsers(data);
    } catch(err) {
      console.log("Error receiving data:", err);
    }
  };

  return (
    
    <div className="connections-page">
      <div className="Search">
        <input
          type="text"
          placeholder="Search to connect..." 
          value={search}
          onChange={(e)=>handleSearch(e.target.value)}
          className="input"
        />
        <div className="Dropdown">
        {users.map((person, index) => (
          <div className="person" onClick={()=>{navigate(`/profile/${person.id}`)}}>
            <img
              src={person.profilePicUrl || "https://anitawatkins.com/wp-content/uploads/2016/02/Generic-Profile-1600x1600.png"} alt={person.name}
            />
            <h3 key={index}>{person.name}</h3>
          </div>
        ))}
        </div>
      </div>
      <div className="connections-header">
        <h1>Connections</h1>
        
    </div>
      <div className="filter-buttons">
        <button onClick={displayConnections}>All</button>
        <button>Recruiters</button>
        <button onClick={displayRequests}>Requests</button>
      </div>

      <div className="connections-grid">
        {showRequests
          ? requests.map((request) => (
              <div className="request-card" key={request.id}>
            <Link key={request} to={`/profile/${request.id}`}>
                <img
                  src={request.profilePicUrl || "https://anitawatkins.com/wp-content/uploads/2016/02/Generic-Profile-1600x1600.png"}
                  alt={request.name}
                  className="request-pic"
                />

                <h3>{request.name}</h3>

                <div className="card-buttons">
                  <button
                    className="accept-btn"
                    onClick={() => acceptRequest(request.id)}
                  >
                    Accept
                  </button>

                  <button
                    className="remove-btn"
                    onClick={() => rejectRequest(request.id)}
                  >
                    Reject
                  </button>
                </div>
              </Link>
              </div>
            ))
          : connections.map((connection) => (
            <Link key={connection} to={`/profile/${connection.id}`}>
              <div className="request-card" key={connection.id}>
                <img
                  src={connection.profilePicUrl || "https://anitawatkins.com/wp-content/uploads/2016/02/Generic-Profile-1600x1600.png"}
                  alt={connection.name}
                  className="request-pic"
                />

                <h3>{connection.name}</h3>
              </div>
              </Link>
            ))}
      </div>
    </div>
  );
}

export default Connections;