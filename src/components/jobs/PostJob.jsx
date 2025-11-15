import { useState } from "react";
import "./postjob.css";

function PostJob() {
  const [form, setForm] = useState({
    companyName: "",
    companyEmail: "",
    jobTitle: "",
    hiringFor: "",
    jobType: "",
    salary: "",
    location: "",
    description: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Job Posted:", form);
    alert("Job Posted Successfully!");
  };

  return (
    <div className="postjob-container">
      <h2>Post a Job</h2>
      <p>Fill the required details below to post a job opening.</p>

      <form className="postjob-form" onSubmit={handleSubmit}>

        {/* Company Name */}
        <label>Company Name</label>
        <input
          type="text"
          name="companyName"
          placeholder="Enter company name"
          required
          onChange={handleChange}
        />

        {/* Company Email */}
        <label>Company Email</label>
        <input
          type="email"
          name="companyEmail"
          placeholder="Enter company email"
          required
          onChange={handleChange}
        />

        {/* Job Title */}
        <label>Job Title</label>
        <input
          type="text"
          name="jobTitle"
          placeholder="e.g., Frontend Developer"
          required
          onChange={handleChange}
        />

        {/* Hiring For */}
        <label>Hiring For</label>
        <select name="hiringFor" required onChange={handleChange}>
          <option value="">Select category</option>
          <option value="Web Developer">Web Developer</option>
          <option value="App Developer">App Developer</option>
          <option value="UI/UX Designer">UI/UX Designer</option>
          <option value="Digital Marketing">Digital Marketing</option>
          <option value="HR Recruiter">HR Recruiter</option>
          <option value="Content Writer">Content Writer</option>
          <option value="Sales Executive">Sales Executive</option>
          <option value="Other">Other</option>
        </select>

        {/* Job Type */}
        <label>Job Type</label>
        <select name="jobType" required onChange={handleChange}>
          <option value="">Select type</option>
          <option value="Full-Time">Full-Time</option>
          <option value="Part-Time">Part-Time</option>
          <option value="Internship">Internship</option>
          <option value="Remote">Remote</option>
          <option value="Freelance">Freelance</option>
        </select>

        {/* Salary */}
        <label>Salary (Optional)</label>
        <input
          type="text"
          name="salary"
          placeholder="e.g., 15,000 - 25,000 per month"
          onChange={handleChange}
        />

        {/* Location */}
        <label>Job Location</label>
        <input
          type="text"
          name="location"
          placeholder="e.g., Noida, Delhi, Remote"
          required
          onChange={handleChange}
        />

        {/* Description */}
        <label>Job Description</label>
        <textarea
          name="description"
          placeholder="Explain job responsibilities, required skills, etc."
          rows="4"
          required
          onChange={handleChange}
        ></textarea>

        <button type="submit" className="submit-btn">Post Job</button>
      </form>
    </div>
  );
}

export default PostJob;
