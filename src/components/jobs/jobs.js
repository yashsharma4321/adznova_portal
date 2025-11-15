import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Jobs() {
  const allJobs = Array.from({ length: 40 }, (_, i) => ({
    title: `Software Engineer ${i + 1}`,
    company: "Tech Company Pvt Ltd",
    salary: "₹30,000 – ₹60,000 / month",
    location: "Delhi, India",
    tags: ["Easily apply", "Flexible schedule"],
    description:
      "We are hiring software developers who can work on scalable applications. Apply now to join our engineering team.",
  }));

  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("Delhi");
  const [selectedJob, setSelectedJob] = useState(null);

  const [page, setPage] = useState(1);
  const pageSize = 10;

  const filtered = allJobs.filter((job) =>
    job.title.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filtered.length / pageSize);

  const jobs = filtered.slice((page - 1) * pageSize, page * pageSize);

  return (
    <div className="container-fluid px-lg-5 px-3 mt-4">

      {/* Search Bar */}
      <div className="d-flex justify-content-center">
        <div className="search-box bg-white rounded-pill shadow-sm p-2 px-4 w-100 w-md-75 d-flex align-items-center gap-3">
          <input
            type="text"
            className="form-control border-0"
            placeholder="Job title, keywords..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setPage(1);
            }}
          />
          <span className="vr d-none d-md-block"></span>
          <input
            type="text"
            className="form-control border-0"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <button className="btn btn-primary rounded-pill px-4">Find jobs</button>
        </div>
      </div>

      {/* Filters Row */}
      <div
        className="d-flex gap-2 gap-md-3 flex-nowrap overflow-auto mt-4 pb-2 filter-scroll"
        style={{ whiteSpace: "nowrap" }}
      >
        {[
          "Pay",
          "Remote",
          "Company",
          "Job type",
          "Programming language",
          "Education",
          "Date posted",
          "Industry",
        ].map((filter, i) => (
          <button key={i} className="btn btn-light rounded-pill border px-3">
            {filter} ▾
          </button>
        ))}
      </div>

      <div className="row mt-4">

        {/* Left Job List */}
        <div className="col-md-5 mb-5">
          {jobs.map((job, index) => (
            <div
              key={index}
              onClick={() => setSelectedJob(job)}
              className={`job-card p-3 rounded-4 mb-3 shadow-sm border ${
                selectedJob?.title === job.title
                  ? "border-primary bg-light-blue"
                  : ""
              }`}
              style={{
                cursor: "pointer",
                transition: "0.2s",
              }}
            >
              <h5 className="fw-bold">{job.title}</h5>
              <p className="text-secondary m-0">{job.company}</p>
              <p className="m-0">📍 {job.location}</p>

              <div className="d-flex gap-2 flex-wrap mt-2">
                <span className="badge bg-success-subtle text-success fw-semibold border">
                  {job.salary}
                </span>

                {job.tags.map((t, i) => (
                  <span key={i} className="badge bg-light border text-dark">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}

          {/* Pagination */}
          <div className="d-flex justify-content-center mt-4 gap-3">
            <button
              className="btn btn-outline-primary rounded-pill"
              disabled={page === 1}
              onClick={() => setPage(page - 1)}
            >
              ⬅ Previous
            </button>

            <strong className="pt-2">{page} / {totalPages}</strong>

            <button
              className="btn btn-outline-primary rounded-pill"
              disabled={page === totalPages}
              onClick={() => setPage(page + 1)}
            >
              Next ➡
            </button>
          </div>
        </div>

        {/* Right Job Details */}
        <div className="col-md-7">
          {selectedJob ? (
            <div
              className="p-4 bg-white rounded-4 shadow-sm border"
              style={{ position: "sticky", top: "15px" }}
            >
              <h3 className="fw-bold">{selectedJob.title}</h3>
              <p className="text-secondary">{selectedJob.company}</p>
              <p>📍 {selectedJob.location}</p>

              <button className="btn btn-primary rounded-pill px-4 mt-3">
                Apply Now
              </button>

              <hr className="my-4" />

              <h5>Description</h5>
              <p>{selectedJob.description}</p>
            </div>
          ) : (
            <p className="text-center text-secondary mt-5">
              👉 Select a job to view details
            </p>
          )}
        </div>
      </div>

      {/* Custom CSS */}
      <style jsx>{`
        .search-box input:focus {
          outline: none;
          box-shadow: none;
        }
        .job-card:hover {
          background: #f8f9ff;
          border-color: #0d6efd !important;
          transform: translateY(-3px);
        }
        .bg-light-blue {
          background: #e9f2ff !important;
        }
        .filter-scroll::-webkit-scrollbar {
          height: 6px;
        }
        .filter-scroll::-webkit-scrollbar-thumb {
          background: #ccc;
          border-radius: 10px;
        }
        @media (max-width: 768px) {
          .search-box {
            flex-direction: column;
            align-items: stretch;
            padding: 15px;
            border-radius: 20px !important;
          }
          .vr {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}

export default Jobs;
