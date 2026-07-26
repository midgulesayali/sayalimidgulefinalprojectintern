import "./CTA.css";
import { Link } from "react-router-dom";

function CTA() {
  return (
    <section className="cta">
      <h1>Ready to build your next chapter?</h1>
      <p>Launch your profile, grow your confidence, and let AI guide every next step.</p>
      <Link to="/register" className="cta-link">Create free account</Link>
    </section>
  );
}

export default CTA;