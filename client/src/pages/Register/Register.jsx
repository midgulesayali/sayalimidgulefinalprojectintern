import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../../services/api";
import "./Register.css";

function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const getStrength = (password) => {
    if (password.length >= 10 && /[A-Z]/.test(password) && /[0-9]/.test(password)) return "Strong";
    if (password.length >= 6) return "Medium";
    return "Weak";
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage({ type: "", text: "" });

    if (form.password !== form.confirmPassword) {
      setMessage({ type: "error", text: "Passwords do not match. Please try again." });
      setIsLoading(false);
      return;
    }

    try {
      await api.post("/register", { name: form.name, email: form.email, password: form.password });
      setMessage({ type: "success", text: "Account created successfully! Redirecting to login..." });
      setTimeout(() => navigate("/login"), 900);
    } catch {
      setMessage({ type: "error", text: "Registration failed. Please use different details." });
    } finally {
      setIsLoading(false);
    }
  };

  const strength = getStrength(form.password);

  return (
    <div className="auth-page">
      <div className="auth-shell reverse">
        <div className="auth-illustration">
          <div className="auth-badge">Create your profile</div>
          <h1>Launch your career with confidence</h1>
          <p>
            Join thousands of job seekers using AI to shape resumes, uncover opportunities,
            and practice interviews with clarity.
          </p>
          <ul>
            <li>Build a polished resume in minutes</li>
            <li>Get tailored skill guidance</li>
            <li>Prepare for interviews with real feedback</li>
          </ul>
        </div>

        <div className="auth-card">
          <div className="auth-card__header">
            <h2>Create account</h2>
            <p>Set up your workspace and start exploring tools instantly.</p>
          </div>

          <form className="auth-form" onSubmit={handleRegister}>
            <label className="input-group">
              <span>Full name</span>
              <input type="text" name="name" placeholder="Your name" value={form.name} onChange={handleChange} required />
            </label>

            <label className="input-group">
              <span>Email address</span>
              <input type="email" name="email" placeholder="you@company.com" value={form.email} onChange={handleChange} required />
            </label>

            <label className="input-group">
              <span>Password</span>
              <div className="password-wrap">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Create a strong password"
                  value={form.password}
                  onChange={handleChange}
                  required
                />
                <button type="button" className="ghost-button" onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </label>

            <label className="input-group">
              <span>Confirm password</span>
              <input type="password" name="confirmPassword" placeholder="Repeat your password" value={form.confirmPassword} onChange={handleChange} required />
            </label>

            {form.password && (
              <div className={`strength-pill strength-${strength.toLowerCase()}`}>Password strength: {strength}</div>
            )}

            {message.text && <div className={`message ${message.type}`}>{message.text}</div>}

            <button className="auth-button" type="submit" disabled={isLoading}>
              {isLoading ? "Creating account..." : "Create account"}
            </button>
          </form>

          <div className="auth-footer">
            <span>Already joined?</span>
            <Link to="/login">Sign in</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;