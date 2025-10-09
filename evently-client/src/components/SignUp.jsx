import React from "react";
import SignUpImg from "../assets/SignUpImg.jpg";
import { FaGoogle, FaFacebookF } from "react-icons/fa";

const SignUp = () => {
  return (
    <div className="SignUp-Page row g-0 py-4 px-5 h-screen">
      <div className="signup-div col-md-4">
        <div className="SignUp-Div py-5 rounded-3 text-center align-items-center text-white">
          <h3 className="fw-bold mb-5">Create Your Account</h3>
          <form className="text-start d-flex flex-column align-items-center">
            <input
              type="text"
              placeholder="Enter User Name"
              className="form-control mb-3 w-75 rounded-5"
            ></input>
            <br></br>
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="form-control mb-3 w-75 rounded-5"
            ></input>
            <br></br>
            <input
              type="password"
              placeholder="Create Password"
              className="form-control mb-3 w-75 rounded-5"
            ></input>
            <br></br>
            <input
              type="password"
              placeholder="Confirm Password"
              className="form-control mb-3 w-75 rounded-5"
            ></input>
            <br></br>
          </form>
          <button className="btn btn-danger fw-bold px-4 rounded-5 ">
            Sign up
          </button>

          <h4 className="mt-5">Register through</h4>
          <div className="signUpoptions mt-4 d-flex justify-content-evenly align-items-center">
            <a
              href="#"
              title="Google"
              className="login-icons rounded-2 justify-content-center align-items-center"
            >
              <FaGoogle />
            </a>
            <a
              href="#"
              title="LinkedIn"
              className="login-icons rounded-2 justify-content-center align-items-center"
            >
              <FaFacebookF />
            </a>
          </div>
        </div>
      </div>
      <div className="Login-Img-Div col-md-8 d-flex justify-content-center align-items-center">
        <img
          src={SignUpImg}
          alt="Event"
          className="SignUp-Img img-fluid rounded-3 shadow-lg"
        />
      </div>
    </div>
  );
};

export default SignUp;
