import React from "react";
import SignUpImg from "../assets/SignUpImg.jpg";
import { FaGoogle, FaFacebookF } from "react-icons/fa";

const SignUp = () => {
  return (
    <div className="SignUp-Page row g-0 p-5 text-white">
      <div className="SignUp-Div col-md-6 p-5 text-center align-items-center">
        <h3 className="fw-bold mb-5">Create Your Account</h3>
        <form className="text-start d-flex flex-column align-items-center">
          <input
            type="text"
            placeholder="Enter User Name"
            className="form-control mb-3 w-75"
          ></input>
          <br></br>
          <input
            type="email"
            placeholder="Enter Your Email Address"
            className="form-control mb-3 w-75"
          ></input>
          <br></br>
          <input
            type="password"
            placeholder="Create Password"
            className="form-control mb-3 w-75"
          ></input>
          <br></br>
          <input
            type="password"
            placeholder="Confirm Password"
            className="form-control mb-3 w-75"
          ></input>
          <br></br>
        </form>
        <button class="btn btn-danger fw-bold px-4 rounded-5 ">Sign up</button>

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
      <div className="Login-Img col-md-6 d-flex justify-content-center">
        <img
          src={SignUpImg}
          alt="Event"
          className="SignUp-Img img-fluid rounded-2 shadow-lg"
        />
      </div>
    </div>
  );
};

export default SignUp;
