import "./auth.css";

function Applicants() {
  const sample = [
    { name: "Rohit Kumar", email: "rohit@mail.com", role: "Frontend Developer" },
    { name: "Priya Sharma", email: "priya@mail.com", role: "UI Designer" },
  ];

  return (
    <div className="applicants-container">
      <h2>Applicants</h2>

      <div className="applicant-list">
        {sample.map((user, index) => (
          <div className="applicant-card" key={index}>
            <h3>{user.name}</h3>
            <p>Email: {user.email}</p>
            <p>Applied For: {user.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Applicants;
