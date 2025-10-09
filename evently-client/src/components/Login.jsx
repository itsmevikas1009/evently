import React from "react";
import "../App";
import LoginPageImg from "../assets/LoginPageImg.jpg";
import { FaGoogle, FaFacebookF } from "react-icons/fa";
import { VscAccount } from "react-icons/vsc";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="Login-Page row g-0 p-5 h-90">
      <div className="Login-Img-Div col-md-8 d-flex justify-content-center">
        <img
          src={LoginPageImg}
          alt="Event"
          className="Login-Img img-fluid rounded-2 shadow-lg"
        />
      </div>
      <div className="Login-Div col-md-4 p-5 text-center align-items-center text-white">
        <VscAccount className="Account-Icon" />
        <h3 className="fw-bold mb-5 ">Login to get started</h3>
        <form className="text-start d-flex flex-column align-items-center">
          <input
            type="text"
            placeholder="Email Address"
            className="form-control mb-3 w-75 rounded-5"
          ></input>
          <br></br>
          <input
            type="password"
            placeholder="Password"
            className="form-control mb-3 w-75 rounded-5"
          ></input>
          <br></br>
        </form>
        <button className="btn btn-danger fw-bold px-4 rounded-5 ">
          Login
        </button>

        <div className="mt-4 d-flex justify-content-between">
          <div>
            <input type="checkbox" className="me-2"></input>
            Remember Me
          </div>

          <div className="Forget-Password">
            <Link to="/login">Forgot Password</Link>
          </div>
        </div>

        <h4 className="mt-5">Login through</h4>
        <div className="loginoptions mt-4 d-flex justify-content-evenly align-items-center">
          <a
            href="#"
            title="Google"
            className="SignUp-Icon rounded-2 justify-content-center align-items-center "
          >
            <FaGoogle />
          </a>
          <a
            href="#"
            title="LinkedIn"
            className="SignUp-Icon rounded-2 justify-content-center align-items-center"
          >
            <FaFacebookF />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
