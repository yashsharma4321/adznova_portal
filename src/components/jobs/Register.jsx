import { useState } from "react";
import "./auth.css";

function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Registration Successful! Now Login.");
  };

  return (
    <div className="auth-container">
      <h2>Company Registration</h2>

      <form className="auth-form" onSubmit={handleSubmit}>
        <label>Your Name</label>
        <input type="text" name="name" required onChange={handleChange} />

        <label>Company Email</label>
        <input type="email" name="email" required onChange={handleChange} />

        <label>Password</label>
        <input type="password" name="password" required onChange={handleChange} />

        <button className="auth-btn">Register</button>
      </form>
    </div>
  );
}

export default Register;
