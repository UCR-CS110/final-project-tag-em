import "./Connections.css"
export default function ConnectionCard({ name, role, mutuals, status }) {
  return (
    <div class="connectionCard">
      <div>
        <h3>{name}</h3>
        <p>{role}</p>
        <p>{mutuals} mutual connections</p>
      </div>
      <button>{status}</button>
    </div>
  );
}