function About() {
  return (
    <div style={{ fontFamily: "Inter, Arial, sans-serif", background: "#f5f7fb" }}>

      {/* -------------------- HERO SECTION -------------------- */}
      <section
        style={{
          padding: "90px 20px",
          background: "linear-gradient(135deg, #4e73df 0%, #1cc88a 100%)",
          color: "white",
          textAlign: "center"
        }}
      >
        <h1 style={{ fontSize: "46px", marginBottom: "10px", fontWeight: "700" }}>
          Empowering Careers. Connecting Talent.
        </h1>
        <p style={{ fontSize: "20px", maxWidth: "750px", margin: "0 auto" }}>
          Adznova Job Portal helps companies hire smarter and job seekers find their dream career.
        </p>
      </section>


      {/* -------------------- ABOUT SECTION -------------------- */}
      <section style={{ padding: "60px 20px", textAlign: "center" }}>
        <h2 style={{ fontSize: "34px", marginBottom: "15px" }}>Who We Are</h2>
        <p
          style={{
            fontSize: "18px",
            maxWidth: "900px",
            margin: "0 auto",
            color: "#555",
            lineHeight: "1.7"
          }}
        >
          Adznova is a modern job marketplace designed for companies and job seekers.
          We simplify hiring by enabling companies to post jobs easily, track applicants,
          and find the right talent faster. Our platform ensures transparency,
          accuracy and smooth hiring experience.
        </p>
      </section>


      {/* -------------------- OUR MISSION -------------------- */}
      <section style={{ padding: "60px 20px", background: "#fff", textAlign: "center" }}>
        <h2 style={{ fontSize: "34px", marginBottom: "15px" }}>Our Mission</h2>
        <p
          style={{
            fontSize: "18px",
            maxWidth: "900px",
            margin: "0 auto",
            color: "#555",
            lineHeight: "1.7"
          }}
        >
          To build India’s smoothest and most efficient hiring platform where employers and job seekers
          connect without hassle. We aim to create opportunities for everyone — freshers, students,
          experienced professionals, and companies of all sizes.
        </p>
      </section>


      {/* -------------------- WHY CHOOSE US -------------------- */}
      <section style={{ padding: "60px 20px" }}>
        <h2 style={{ textAlign: "center", fontSize: "34px", marginBottom: "40px" }}>
          Why Companies Choose Us
        </h2>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "25px",
            flexWrap: "wrap"
          }}
        >
          {[
            {
              title: "Easy Job Posting",
              desc: "Post jobs within minutes with our simple dashboard."
            },
            {
              title: "Track Applicants",
              desc: "See who applied, filter applicants, and manage hiring."
            },
            {
              title: "Verified Candidates",
              desc: "Real candidate profiles with complete details."
            },
            {
              title: "Fast Hiring Process",
              desc: "Shortlist and hire candidates 2x faster."
            }
          ].map((item, i) => (
            <div
              key={i}
              style={{
                width: "260px",
                padding: "25px",
                background: "#fff",
                borderRadius: "12px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                textAlign: "center"
              }}
            >
              <h3 style={{ color: "#4e73df", marginBottom: "10px" }}>{item.title}</h3>
              <p style={{ color: "#555", fontSize: "15px" }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>


      {/* -------------------- STATS SECTION -------------------- */}
      <section
        style={{
          padding: "70px 20px",
          background: "#4e73df",
          color: "white",
          textAlign: "center"
        }}
      >
        <h2 style={{ fontSize: "34px", marginBottom: "30px" }}>Our Impact</h2>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "40px",
            flexWrap: "wrap"
          }}
        >
          {[
            { value: "10,000+", label: "Registered Job Seekers" },
            { value: "500+", label: "Companies Hiring" },
            { value: "2,000+", label: "Successful Placements" }
          ].map((stat, i) => (
            <div key={i}>
              <h3 style={{ fontSize: "40px", marginBottom: "10px" }}>{stat.value}</h3>
              <p style={{ fontSize: "18px" }}>{stat.label}</p>
            </div>
          ))}
        </div>
      </section>


      {/* -------------------- HIRING PARTNERS -------------------- */}
      <section style={{ padding: "60px 20px", background: "#fff" }}>
        <h2 style={{ textAlign: "center", fontSize: "34px", marginBottom: "40px" }}>
          Hiring Partners
        </h2>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "30px",
            flexWrap: "wrap"
          }}
        >
          {["Google", "Infosys", "Wipro", "Byju's", "Swiggy", "GoDaddy"].map((brand, i) => (
            <div
              key={i}
              style={{
                fontSize: "20px",
                background: "#f0f2f7",
                padding: "15px 25px",
                borderRadius: "10px",
                boxShadow: "0 2px 10px rgba(0,0,0,0.08)"
              }}
            >
              {brand}
            </div>
          ))}
        </div>
      </section>


      {/* -------------------- TESTIMONIALS -------------------- */}
      <section style={{ padding: "60px 20px" }}>
        <h2 style={{ textAlign: "center", fontSize: "34px", marginBottom: "30px" }}>
          What People Say
        </h2>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            flexWrap: "wrap"
          }}
        >
          {[
            {
              name: "Rahul Verma",
              feedback: "I found a great job within a week! Highly recommended."
            },
            {
              name: "Shreya Kapoor",
              feedback: "Easy to apply and very smooth hiring process."
            },
            {
              name: "Ayush Singh",
              feedback: "Companies respond quickly here. Best job platform."
            }
          ].map((t, i) => (
            <div
              key={i}
              style={{
                width: "300px",
                background: "#fff",
                padding: "25px",
                borderRadius: "12px",
                boxShadow: "0 4px 15px rgba(0,0,0,0.1)"
              }}
            >
              <p style={{ fontSize: "16px", color: "#444" }}>“{t.feedback}”</p>
              <strong style={{ marginTop: "10px", display: "block", color: "#4e73df" }}>
                — {t.name}
              </strong>
            </div>
          ))}
        </div>
      </section>


      {/* -------------------- CTA -------------------- */}
      <section
        style={{
          padding: "80px 20px",
          background: "#1cc88a",
          color: "white",
          textAlign: "center"
        }}
      >
        <h2 style={{ fontSize: "36px", marginBottom: "15px" }}>
          Ready to Post a Job or Find Your Next Career?
        </h2>
        <p style={{ fontSize: "20px", marginBottom: "25px" }}>
          Join Adznova today and take the next step toward success.
        </p>

        <button
          style={{
            padding: "12px 28px",
            background: "#fff",
            color: "#1cc88a",
            border: "none",
            borderRadius: "10px",
            fontSize: "18px",
            cursor: "pointer",
            fontWeight: "600"
          }}
        >
          Get Started
        </button>
      </section>
    </div>
  );
}

export default About;
