import { useEffect, useState } from "react";
import "./Connections.css";

function Connections() {
  const [search, handleSearch] = useState("");
  const [users, handleUsers] = useState([]);
  useEffect(()=>{
    displayUsers();
  },[search])
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
          <h3 key={index}>{person.name}</h3>
        ))}
        </div>
      </div>
      <div className="connections-header">
        <h1>Connections</h1>
        
    </div>
      <div className="filter-buttons">
        <button>All</button>
        <button>Recruiters</button>
      </div>

      <div className="connections-grid">

            <div className="card-buttons">
              <button className="message-btn">Message</button>
              <button className="remove-btn">Remove</button>
            </div>
          </div>
      </div>
  );
}

export default Connections;