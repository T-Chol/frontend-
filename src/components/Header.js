src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
// import './Header.css'; // Optional: add some basic styling

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <Link to="/" className="logo">Book-A-Meal</Link>
        <ul className="nav-links">
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/signup">Sign Up</Link></li>
          <li><Link to="/dashboard">Dashboard</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;


