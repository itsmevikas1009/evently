import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      className="navbar px-3 navbar-expand-lg py-3"
      style={{ backgroundColor: "#36104A" }}
    >
      <div className="container-fluid d-flex align-items-center">
        <h3 className="fw-bold text-white m-0">
          ev<span className="text-danger">Ently</span>
        </h3>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarContent">
          <div className="d-flex flex-column flex-lg-row align-items-lg-center gap-4 mx-auto">
            <Link
              className="text-decoration-none text-white fw-semibold nav-link"
              to={"/"}
            >
              Home
            </Link>
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
            <Link
              to="/events"
              className="text-decoration-none text-white fw-semibold nav-link"
            >
              Events
            </Link>
            <a
              className="text-decoration-none text-white fw-semibold nav-link"
              href="/contact"
            >
              Contact
            </a>
          </div>

          {/* CTA Buttons (right) */}
          <div className="d-flex align-items-center gap-2 mt-3 mt-lg-0">
            <Link
              to={"/login"}
              className="btn btn-danger fw-bold px-4 rounded-5"
            >
              Login
            </Link>
            <Link
              to={"/signup"}
              className="btn bg-light fw-bold px-4 rounded-5"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
