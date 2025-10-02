import React from "react";
import SignUpImg from "../assets/SignUpImg.jpg";

const SignUp = () => {
  return (
    <div
      className="Login-Page row g-0 p-5 text-white"
      style={{ backgroundColor: "#50589C" }}
    >
      <div className="Login-Div col-md-6 p-5 text-center align-items-center text-dark">
        <h3 className="fw-bold mb-5">Create Your Account</h3>
        <form className="text-start">
          <input
            type="text"
            placeholder="Enter User Name"
            className="form-control mb-3"
          ></input>
          <br></br>
          <input
            type="email"
            placeholder="Enter Your Email Address"
            className="form-control mb-3"
          ></input>
          <br></br>
          <input
            type="password"
            placeholder="Create Password"
            className="form-control mb-3"
          ></input>
          <br></br>
          <input
            type="password"
            placeholder="Confirm Password"
            className="form-control mb-3"
          ></input>
          <br></br>
        </form>
        <button class="btn btn-danger fw-bold px-4 rounded-5 ">Sign up</button>

        <h4 className="mt-5">Register through</h4>
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
            <i
              class="fa-brands fa-google text-dark mt-1"
              style={{
                fontSize: "1.5rem",
              }}
            ></i>
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
            <i
              class="fa-brands fa-linkedin-in text-dark mt-1"
              style={{
                fontSize: "1.5rem",
              }}
            ></i>
          </a>
        </div>
      </div>
      <div className="Login-Img col-md-6 d-flex justify-content-center">
        <img
          src={SignUpImg}
          alt="Event"
          className="img-fluid rounded-2 shadow-lg"
          style={{ maxHeight: "750px", objectFit: "cover" }}
        />
      </div>
    </div>
  );
};

export default SignUp;
