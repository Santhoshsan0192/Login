import React from 'react';
import './Home.css';

export default function Home() {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Welcome to Our App</h1>
        <a href="/signup" className="home-button">Get Started</a>
      </header>

      <section className="home-features">
        <div className="feature-box">
          <h3>🔒 Secure</h3>
          <p>Your data is safe with us using top-grade encryption.</p>
        </div>
        <div className="feature-box">
          <h3>⚡ Fast</h3>
          <p>Experience lightning-fast signup and login.</p>
        </div>
        <div className="feature-box">
          <h3>🎯 Simple</h3>
          <p>Clean, minimal design focused on usability.</p>
        </div>
      </section>

     
    </div>
  );
}
