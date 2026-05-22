import { useState } from "react";
import "./Jobs.css";

const startingJobs = [
  {
    id: 1,
    title: "Frontend Developer Intern",
    company: "TechBridge",
    location: "Remote",
    sender: "Maya Chen",
  },
  {
    id: 2,
    title: "Software Engineering Intern",
    company: "CloudWorks",
    location: "Los Angeles",
    sender: "Jordan Lee",
  },
];

export default function Jobs() {
  const [jobs, setJobs] = useState(startingJobs);

  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [location, setLocation] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const newJob = {
      id: Date.now(),
      title,
      company,
      location,
      sender: "You",
    };

    setJobs([newJob, ...jobs]);

    setTitle("");
    setCompany("");
    setLocation("");
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

          <button type="submit">Post Job</button>
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

              <p>
                <strong>Sent by:</strong> {job.sender}
              </p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}