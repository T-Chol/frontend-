// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Import the Header CSS

function Header({ handleLogout, isLoggedIn }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light header">
      <div className="container-fluid">
        {/* Add hotel logo */}
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img
            src="/assets/logo.jpeg" // Replace with your logo's path
            alt="Logo"
            className="hotel-logo"
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/menu">Menu</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/team">Team</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/specials">Today's Specials</Link>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto">
            {!isLoggedIn ? (
              <>
                <li className="nav-item">
                  <Link className="nav-link btn btn-primary mx-2" to="/signup">
                    Sign Up
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link btn btn-secondary mx-2" to="/login">
                    Log In
                  </Link>
                </li>
              </>
            ) : (
              <li className="nav-item">
                <button className="btn btn-danger mx-2" onClick={handleLogout}>
                  Log Out
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
