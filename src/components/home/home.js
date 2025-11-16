function Home() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>

      {/* Hero Section */}
      <section
        style={{
          padding: "80px 20px",
          textAlign: "center",
          background: "linear-gradient(135deg, #4f46e5, #4338ca)",
          color: "white",
        }}
      >
        <h1 style={{ fontSize: "48px", marginBottom: "15px" }}>
          Find Your Dream Job Today
        </h1>
        <p style={{ fontSize: "18px", opacity: 0.9, maxWidth: "650px", margin: "0 auto" }}>
          Search thousands of job listings and connect with top companies hiring now.
        </p>

        <div style={{ marginTop: "40px" }}>
          <input
            type="text"
            placeholder="Search for jobs…"
            style={{
              width: "300px",
              padding: "12px",
              borderRadius: "8px",
              border: "none",
              outline: "none",
              marginRight: "10px",
            }}
          />

          <button
            style={{
              padding: "12px 20px",
              background: "#ffbb00",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Search
          </button>
        </div>
      </section>

      {/* Popular Categories */}
      <section style={{ padding: "60px 20px" }}>
        <h2 style={{ textAlign: "center", marginBottom: "30px" }}>Popular Job Categories</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "20px",
          }}
        >
          {[
            "Software Development",
            "Digital Marketing",
            "UI/UX Design",
            "Business Management",
            "Customer Support",
            "Finance & Accounting",
          ].map((cat, index) => (
            <div
              key={index}
              style={{
                padding: "20px",
                border: "1px solid #ddd",
                borderRadius: "12px",
                textAlign: "center",
                background: "#fafafa",
              }}
            >
              <h3>{cat}</h3>
              <p style={{ fontSize: "14px", opacity: 0.7 }}>120+ Jobs Available</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Jobs */}
      <section style={{ padding: "60px 20px", background: "#f8f9ff" }}>
        <h2 style={{ textAlign: "center", marginBottom: "30px" }}>Featured Jobs</h2>

        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          {[1, 2, 3].map((job) => (
            <div
              key={job}
              style={{
                padding: "20px",
                background: "white",
                border: "1px solid #ddd",
                borderRadius: "12px",
                marginBottom: "20px",
              }}
            >
              <h3>Frontend Developer</h3>
              <p style={{ opacity: 0.7 }}>Company: TechNova Pvt Ltd</p>
              <p style={{ opacity: 0.7 }}>Location: Noida, India</p>

              <button
                style={{
                  marginTop: "10px",
                  padding: "10px 15px",
                  background: "#4f46e5",
                  color: "white",
                  border: "none",
                  borderRadius: "8px",
                  cursor: "pointer",
                }}
              >
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section
        style={{
          padding: "60px 20px",
          textAlign: "center",
        }}
      >
        <h2>Why Choose Us?</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px,1fr))",
            marginTop: "30px",
            gap: "20px",
          }}
        >
          <div>
            <h3 style={{ fontSize: "32px", color: "#4f46e5" }}>10k+</h3>
            <p>Active Jobs</p>
          </div>

          <div>
            <h3 style={{ fontSize: "32px", color: "#4f46e5" }}>5k+</h3>
            <p>Hiring Companies</p>
          </div>

          <div>
            <h3 style={{ fontSize: "32px", color: "#4f46e5" }}>50k+</h3>
            <p>Registered Users</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          padding: "20px",
          textAlign: "center",
          background: "#111827",
          color: "white",
        }}
      >
        © {new Date().getFullYear()} Adznova Job Portal. All Rights Reserved.
      </footer>
    </div>
  );
}

export default Home;
