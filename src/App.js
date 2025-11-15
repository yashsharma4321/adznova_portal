import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar";

// Public Pages
import Home from "./components/home/home";
import About from "./components/about/about";
import Contact from "./components/contact/contact";
import Jobs from "./components/jobs/jobs";
import Apply from "./components/jobs/apply";

// Auth Pages
import Login from "./components/jobs/Login";
import Register from "./components/jobs/Register";

// Dashboard Pages
import Dashboard from "./components/jobs/Dashboard";
import PostJob from "./components/jobs/PostJob";

// src/components/jobs/Applicants.jsx
import Applicants from "./components/jobs/Applicants";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/apply" element={<Apply />} />

        {/* Auth Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Dashboard Routes */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/post-job" element={<PostJob />} />
        <Route path="/dashboard/applicants" element={<Applicants />} />
      </Routes>
    </Router>
  );
}

export default App;
