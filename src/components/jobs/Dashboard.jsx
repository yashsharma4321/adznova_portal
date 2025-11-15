import { Link } from "react-router-dom";
import "./dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard-container">

      <div className="sidebar">
        <h2>Dashboard</h2>
        <Link to="/dashboard/post-job">Post Job</Link>
        <Link to="/dashboard/applicants">Applicants</Link>
        <Link to="/login">Logout</Link>
      </div>

      <div className="dashboard-content">
        <h1>Welcome to Company Dashboard</h1>

        <div className="stats">
          <div className="stat-box">
            <h3>12</h3>
            <p>Total Applicants</p>
          </div>

          <div className="stat-box">
            <h3>3</h3>
            <p>Active Jobs</p>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Dashboard;
