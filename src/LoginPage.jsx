import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <div className="card p-4 shadow-lg" style={{ width: "100%", maxWidth: "400px" }}>
        <h2 className="text-center mb-4">Login</h2>
        <form>
          <div className="mb-3">
            <input
              type="email"
              placeholder="Email"
              className="form-control"
              required
            />
          </div>

          <div className="mb-3 position-relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="form-control"
              required
            />
            <span
              className="position-absolute top-50 end-0 translate-middle-y me-3"
              style={{ cursor: "pointer" }}
              onClick={() => setShowPassword(!showPassword)}
              role="button"
              aria-label="Toggle password visibility"
              tabIndex="0"
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') setShowPassword(!showPassword);
              }}
            >
              {showPassword ? "🙈" : "👁️"}
            </span>
          </div>

          <div className="mb-2 text-end">
            <a href="#" className="text-decoration-none">Forgot password?</a>
          </div>

          <button type="submit" className="btn btn-primary w-100 mb-3">Login</button>

          <p className="text-center">
            Don’t have an account? <a href="#" className="text-primary">Signup</a>
          </p>

          <div className="d-flex align-items-center my-3">
            <hr className="flex-grow-1" />
            <span className="px-2">Or</span>
            <hr className="flex-grow-1" />
          </div>

          <button type="button" className="btn btn-outline-primary w-100 mb-2">
            📘 Login with Facebook
          </button>
          <button type="button" className="btn btn-outline-danger w-100">
            🟦 Login with Google
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
