import "./Features.css";

const features = [
  { title: "Resume Builder", desc: "Create polished, ATS-friendly resumes with confidence." },
  { title: "AI Resume Analysis", desc: "Understand what recruiters notice right away." },
  { title: "Career Recommendation", desc: "Discover paths that match your strengths and goals." },
  { title: "Interview Practice", desc: "Rehearse role-based questions and sharpen your delivery." },
];

function Features() {
  return (
    <section className="features" id="features">
      <div className="section-heading">
        <p className="eyebrow">Everything you need</p>
        <h2>Purpose-built experiences for modern career growth.</h2>
      </div>

      <div className="feature-grid">
        {features.map((item) => (
          <div className="feature-card" key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;