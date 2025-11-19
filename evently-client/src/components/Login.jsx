import React, { useState } from "react";
import "../App";
import LoginPageImg from "../assets/LoginPageImg.jpg";
import { FaGoogle, FaFacebookF } from "react-icons/fa";
import { VscAccount } from "react-icons/vsc";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const { login } = useAuth(); // Get login function from context
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:4000/api/v1/users/login",
        {
          email: form.email,
          password: form.password,
        },
        { withCredentials: true }
      );
      // Save user info, excluding tokens if you don’t need them in the frontend
      login(res.data.data.user);
      toast.success(res.data.message || "Logged in successfully!");
      setForm({ email: "", password: "" });
      // Optionally navigate
      setTimeout(() => navigate("/"), 1200);
    } catch (err) {
      toast.error(
        err?.response?.data?.message || "Error during login. Please try again."
      );
    }
  };

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
        <h3 className="fw-bold mb-5">Login to get started</h3>
        <form
          className="text-start d-flex flex-column align-items-center"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="email"
            placeholder="Email Address"
            className="form-control mb-3 w-75 rounded-5"
            value={form.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="form-control mb-3 w-75 rounded-5"
            value={form.password}
            onChange={handleChange}
            required
          />
          <button
            className="btn btn-danger fw-bold px-4 rounded-5"
            type="submit"
          >
            Login
          </button>
        </form>
        <h4 className="mt-5">Login through</h4>
        <div className="loginoptions mt-4 d-flex justify-content-evenly align-items-center">
          <a
            href="#"
            title="Google"
            className="SignUp-Icon rounded-2 justify-content-center align-items-center "
            tabIndex={-1}
          >
            <FaGoogle />
          </a>
          <a
            href="#"
            title="Facebook"
            className="SignUp-Icon rounded-2 justify-content-center align-items-center"
            tabIndex={-1}
          >
            <FaFacebookF />
          </a>
        </div>
      </div>
      {/* Toast notifications container */}
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default Login;
