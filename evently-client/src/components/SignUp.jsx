import React from "react";
import SignUpImg from "../assets/SignUpImg.jpg";
import { FaGoogle, FaFacebookF } from "react-icons/fa";

const SignUp = () => {
  return (
    <div className="SignUp-Page container-fluid py-5 text-white">
      <div className="row g-0 d-flex align-items-center justify-content-center">

        {/* SignUp Form */}
        <div className="col-12 col-md-6 p-5 text-center">
          <h3 className="fw-bold mb-4">Create Your Account</h3>

          <form className="text-start d-flex flex-column align-items-center w-100">
            <input
              type="text"
              placeholder="Enter Username"
              className="form-control mb-3 w-75 rounded-4"
            />

            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="form-control mb-3 w-75 rounded-4"
            />

            <input
              type="password"
              placeholder="Create Password"
              className="form-control mb-3 w-75 rounded-4"
            />

            <input
              type="password"
              placeholder="Confirm Password"
              className="form-control mb-3 w-75 rounded-4"
            />
          </form>

          <button className="btn btn-danger fw-bold px-5 rounded-pill mt-2">
            Sign Up
          </button>

          <h5 className="mt-4">Register through</h5>

          <div className="signUpoptions mt-3 d-flex justify-content-center gap-4">
            <a className="login-icons d-flex justify-content-center align-items-center rounded-2 p-2 shadow">
              <FaGoogle size={20} />
            </a>

            <a className="login-icons d-flex justify-content-center align-items-center rounded-2 p-2 shadow">
              <FaFacebookF size={20} />
            </a>
          </div>
        </div>

        {/* Image Section - hidden on mobile */}
        <div className="col-md-6 d-none d-md-flex justify-content-center">
          <img
            src={SignUpImg}
            alt="Event"
            className="SignUp-Img img-fluid rounded-3 shadow-lg w-100"
            style={{ maxHeight: "500px", objectFit: "cover" }}
          />
        </div>

      </div>
    </div>
  );
};

export default SignUp;
