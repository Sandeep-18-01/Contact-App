import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    // Customized Navbar
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link to="/" className="navbar-brand">
          <h3>Contact List</h3>
        </Link>

        {/* Navbar Toggler (for mobile) */}
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            {/* Add more navigation links as needed */}
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/add" className="nav-link">
                Add Contact
              </Link>
            </li>
            {/* Add more links here if needed */}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
