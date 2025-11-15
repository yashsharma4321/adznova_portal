import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function Apply() {
  const location = useLocation();
  const navigate = useNavigate();
  const job = location.state; // job data from Jobs.jsx

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    resume: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // (you can send this data to backend later)
    alert(`✅ Application submitted for ${job?.title}`);
    navigate("/"); // redirect back to home/jobs
  };

  if (!job) {
    return (
      <div className="container text-center mt-5">
        <h4>No job selected. Go back to Jobs page.</h4>
        <button className="btn btn-primary mt-3" onClick={() => navigate("/")}>
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <div className="card shadow p-4">
        <h3 className="mb-3 text-primary">{job.title}</h3>
        <p>
          <strong>Company:</strong> {job.company}
        </p>
        <p>
          <strong>Location:</strong> {job.location}
        </p>
        <p>
          <strong>Salary:</strong> {job.salary}
        </p>
        <p>
          <strong>Job Type:</strong> {job.type}
        </p>
        <p>{job.description}</p>

        <hr />

        <h5 className="mt-3 mb-3">Apply for this Job</h5>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Full Name</label>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Email Address</label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Upload Resume (PDF/DOC)</label>
            <input
              type="file"
              name="resume"
              className="form-control"
              accept=".pdf,.doc,.docx"
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="btn btn-success w-100">
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
}

export default Apply;
