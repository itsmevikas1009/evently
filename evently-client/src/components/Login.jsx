import React from "react";
import LoginPageImg from "../assets/LoginPageImg.jpg";
import { FaGoogle, FaLinkedinIn } from "react-icons/fa";

const Login = () => {
  return (
    <div
      className="Login-Page row g-0 p-5 text-white"
      style={{ backgroundColor: "#50589C" }}
    >
      <div className="Login-Img col-md-6 d-flex justify-content-center">
        <img
          src={LoginPageImg}
          alt="Event"
          className="img-fluid rounded-2 shadow-lg"
          style={{ maxHeight: "500px", objectFit: "cover" }}
        />
      </div>
      <div className="Login-Div col-md-6 p-5 text-center align-items-center text-dark">
        <h3 className="fw-bold mb-5 ">Login to get started</h3>
        <form className="text-start">
          <input
            type="text"
            placeholder="Email Address"
            className="form-control mb-3"
          ></input>
          <br></br>
          <input
            type="password"
            placeholder="Password"
            className="form-control mb-3"
          ></input>
          <br></br>
        </form>
        <button class="btn btn-danger fw-bold px-4 rounded-5 ">Login</button>

        <h4 className="mt-5">Login through</h4>
        <div className="loginoptions mt-4 d-flex justify-content-evenly align-items-center">
          <a
            href="#"
            title="Google"
            style={{
              height: "2rem",
              width: "2rem",
              backgroundColor: "#9193a1ff",
            }}
            className="rounded-2 justify-content-center align-items-center"
          >
            <FaGoogle />
          </a>
          <a
            href="#"
            title="LinkedIn"
            style={{
              height: "2rem",
              width: "2rem",
              backgroundColor: "#9193a1ff",
            }}
            className="rounded-2 justify-content-center align-items-center"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
