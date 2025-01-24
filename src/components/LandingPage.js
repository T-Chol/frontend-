import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css'; // Optional: for styling the landing page

const LandingPage = () => {
  return (
    <div className="landing-container">
      <header className="landing-header">
        <h1>Welcome to Book-A-Meal</h1>
        <p>Your one-stop app to order delicious meals!</p>
      </header>

      <section className="landing-content">
        <p>Browse the menu, select your meal, and enjoy a hassle-free food experience!</p>

        <div className="cta-buttons">
          <Link to="/signup">
            <button className="cta-button">Sign Up</button>
          </Link>
          <Link to="/login">
            <button className="cta-button">Log In</button>
          </Link>
        </div>
      </section>

      <footer className="landing-footer">
        <p>© 2025 Book-A-Meal. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
