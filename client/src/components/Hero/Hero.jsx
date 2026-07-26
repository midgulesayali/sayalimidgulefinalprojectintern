import "./Hero.css";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero" id="about">
      <div className="hero-left">
        <div className="hero-pill">AI-powered career growth</div>
        <h1>Build a confident future with smarter career tools.</h1>
        <p>
          Design standout resumes, receive instant analysis, discover tailored career paths,
          and rehearse interviews with guidance that feels personal and practical.
        </p>

        <div className="hero-actions">
          <Link to="/register" className="hero-primary">Get Started</Link>
          <Link to="/login" className="hero-secondary">View dashboard</Link>
        </div>
      </div>

      <div className="hero-right">
        <img
          src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=700"
          alt="AI Career"
        />
      </div>
    </section>
  );
}

export default Hero;