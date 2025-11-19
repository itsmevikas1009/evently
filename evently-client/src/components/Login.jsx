import React from "react";
import "../App";
import LoginPageImg from "../assets/LoginPageImg.jpg";
import { FaGoogle, FaFacebookF } from "react-icons/fa";
import { VscAccount } from "react-icons/vsc";

const Login = () => {
  return (
    <div className="Login-Page container-fluid py-5 text-white">
      <div className="row g-0 d-flex align-items-center justify-content-center">

        {/* Login Form */}
        <div className="col-12 col-md-4 p-5 text-center">
          <VscAccount size={50} className="mb-3" />

          <h3 className="fw-bold mb-4">Login to Get Started</h3>

          <form className="text-start d-flex flex-column align-items-center w-100">

            <input
              type="email"
              placeholder="Email Address"
              className="form-control mb-3 w-75 rounded-4"
            />

            <input
              type="password"
              placeholder="Password"
              className="form-control mb-3 w-75 rounded-4"
            />
          </form>

          <button className="btn btn-danger fw-bold px-5 rounded-pill mt-2">
            Login
          </button>

          <h5 className="mt-4">Login through</h5>

          <div className="loginoptions mt-3 d-flex justify-content-center gap-4">

            <a className="login-icons d-flex justify-content-center align-items-center rounded-2 p-2 shadow">
              <FaGoogle size={20} />
            </a>

            <a className="login-icons d-flex justify-content-center align-items-center rounded-2 p-2 shadow">
              <FaFacebookF size={20} />
            </a>
          </div>
        </div>

        {/* Image Section - hidden on mobile */}
        <div className="col-md-8 d-none d-md-flex justify-content-center">
          <img
            src={LoginPageImg}
            alt="Event"
            className="Login-Img img-fluid rounded-3 shadow-lg w-100"
            style={{ maxHeight: "500px", objectFit: "cover" }}
          />
        </div>

      </div>
    </div>
  );
};

export default Login;
