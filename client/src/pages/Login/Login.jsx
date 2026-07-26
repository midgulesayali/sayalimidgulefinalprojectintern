import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../../services/api";
import "./Login.css";

function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage({ type: "", text: "" });

    try {
      const res = await api.post("/login", form);

      if (rememberMe) {
        localStorage.setItem("token", res.data.token);
      } else {
        sessionStorage.setItem("token", res.data.token);
      }

      setMessage({ type: "success", text: "Welcome back! Redirecting to your dashboard..." });
      setTimeout(() => navigate("/dashboard"), 800);
    } catch (err) {
      setMessage({ type: "error", text: "Invalid credentials. Please try again." });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-shell">
        <div className="auth-illustration">
          <div className="auth-badge">AI Career Studio</div>
          <h1>Welcome back</h1>
          <p>
            Level up your professional profile with AI-guided resume building,
            smart interviews, and career recommendations.
          </p>
          <ul>
            <li>Personalized career guidance</li>
            <li>Resume analysis in seconds</li>
            <li>Interview preparation with confidence</li>
          </ul>
        </div>

        <div className="auth-card">
          <div className="auth-card__header">
            <h2>Sign in</h2>
            <p>Access your dashboard and continue building your future.</p>
          </div>

          <form className="auth-form" onSubmit={handleLogin}>
            <label className="input-group">
              <span>Email address</span>
              <input
                type="email"
                name="email"
                placeholder="you@company.com"
                value={form.email}
                onChange={handleChange}
                required
              />
            </label>

            <label className="input-group">
              <span>Password</span>
              <div className="password-wrap">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Enter your password"
                  value={form.password}
                  onChange={handleChange}
                  required
                />
                <button
                  type="button"
                  className="ghost-button"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </label>

            <div className="auth-row">
              <label className="checkbox-row">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={() => setRememberMe(!rememberMe)}
                />
                <span>Remember me</span>
              </label>
              <a href="/">Forgot password?</a>
            </div>

            {message.text && <div className={`message ${message.type}`}>{message.text}</div>}

            <button className="auth-button" type="submit" disabled={isLoading}>
              {isLoading ? "Signing in..." : "Sign in"}
            </button>
          </form>

          <div className="auth-footer">
            <span>New here?</span>
            <Link to="/register">Create an account</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;