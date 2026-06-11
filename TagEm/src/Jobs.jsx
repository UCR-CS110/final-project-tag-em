import { useState } from "react";
import "./Jobs.css";

const connections = [
  "Backend",
  "Frontend",
  "UI/UX",
  "-------------------",
  "Daniyal Bhat",
  "Gabriel Allaf",
  "Jayanth Samala",
  "..."
];

const startingJobs = [
  {
    id: 1,
    title: "Frontend Developer Intern",
    company: "TechBridge",
    location: "Remote",
    description: "Build React components and help improve the company dashboard.",
    sender: "Gabriel Allaf",
    taggedContacts: ["Jayanth Samala"],
  },
  {
    id: 2,
    title: "Software Engineering Intern",
    company: "CloudWorks",
    location: "Los Angeles",
    description: "Work with backend APIs and database systems.",
    sender: "Daniyal Bhat",
    taggedContacts: ["Jayanth Samala"],
  },
];

export default function Jobs() {
  const [jobs, setJobs] = useState(startingJobs);

  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [selectedContacts, setSelectedContacts] = useState([]);

  function handleContactChange(contact) {
    if (selectedContacts.includes(contact)) {
      setSelectedContacts(selectedContacts.filter((person) => person !== contact));
    } else {
      setSelectedContacts([...selectedContacts, contact]);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newJob = {
      id: Date.now(),
      title,
      company,
      location,
      description,
      sender: "You",
      taggedContacts: selectedContacts,
    };

    setJobs([newJob, ...jobs]);

    setTitle("");
    setCompany("");
    setLocation("");
    setDescription("");
    setSelectedContacts([]);
  }

  return (
    <main className="jobs-page">
      <h1>Jobs</h1>

      <section className="job-section">
        <h2>Create a Job Posting</h2>

        <form className="job-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Job title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />

          <input
            type="text"
            placeholder="Company"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            required
          />

          <input
            type="text"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />

          <textarea
            placeholder="Job details"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />

          <div className="connections-box">
            <h3>Tag connections who may be a good fit</h3>

            {connections.map((contact) => (
              <label className="connection-option" key={contact}>
                <input
                  type="checkbox"
                  checked={selectedContacts.includes(contact)}
                  onChange={() => handleContactChange(contact)}
                />
                {contact}
              </label>
            ))}
          </div>

          <button type="submit">Post and Share Job</button>
        </form>
      </section>

      <section className="job-section">
        <h2>Job Postings Sent to You</h2>

        <div className="job-list">
          {jobs.map((job) => (
            <article className="job-card" key={job.id}>
              <h3>{job.title}</h3>

              <p>
                <strong>Company:</strong> {job.company}
              </p>

              <p>
                <strong>Location:</strong> {job.location}
              </p>

              <p>{job.description}</p>

              <p>
                <strong>Sent by:</strong> {job.sender}
              </p>

              {job.taggedContacts.length > 0 && (
                <p>
                  <strong>Forwarded to:</strong> {job.taggedContacts.join(", ")}
                </p>
              )}
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}