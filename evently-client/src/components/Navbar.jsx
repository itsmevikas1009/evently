import React from "react";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg px-5 py-3"
      style={{ backgroundColor: "#36104A" }}
    >
      <div className="container-fluid d-flex align-items-center">
        {/* Logo (left) */}
        <h3 className="fw-bold text-white m-0">
          ev<span className="text-danger">Ently</span>
        </h3>

        {/* Links (center) */}
        <div className="d-flex align-items-center gap-4 mx-auto">
          <a
            className="text-decoration-none text-white fw-semibold nav-link"
            href="/"
          >
            Home
          </a>
          <a
            className="text-decoration-none text-white fw-semibold nav-link"
            href="/about"
          >
            About us
          </a>
          <a
            className="text-decoration-none text-white fw-semibold nav-link"
            href="/offer"
          >
            Offer
          </a>
          <a
            className="text-decoration-none text-white fw-semibold nav-link"
            href="/events"
          >
            Events
          </a>
          <a
            className="text-decoration-none text-white fw-semibold nav-link"
            href="/contact"
          >
            Contact
          </a>
        </div>

        {/* CTA Buttons (right) */}
        <div className="d-flex align-items-center gap-2">
          <button className="btn btn-danger fw-bold px-4 rounded-5">
            Login
          </button>
          <button className="btn btn-outline-light fw-bold px-4 rounded-5">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
