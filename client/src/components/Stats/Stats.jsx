import "./Stats.css";

function Stats() {
  const stats = [
    { title: "Students", value: "10,000+" },
    { title: "Resumes Built", value: "25,000+" },
    { title: "AI Interviews", value: "8,500+" },
    { title: "Success Rate", value: "95%" },
  ];

  return (
    <section className="stats">
      <h2>Our Impact</h2>

      <div className="stats-grid">
        {stats.map((item) => (
          <div className="stat-card" key={item.title}>
            <h1>{item.value}</h1>
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Stats;