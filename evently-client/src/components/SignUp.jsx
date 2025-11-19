import React, { useState } from "react";
import SignUpImg from "../assets/SignUpImg.jpg";
import { FaGoogle, FaFacebookF } from "react-icons/fa";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUp = () => {
  const [form, setForm] = useState({
    fullName: "",
    username: "",
    email: "",
    password: "",
  });
  const [avatar, setAvatar] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAvatarChange = (e) => {
    setAvatar(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!avatar) {
      toast.error("Avatar image is required.");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("fullName", form.fullName);
      formData.append("username", form.username);
      formData.append("email", form.email);
      formData.append("password", form.password);
      formData.append("avatar", avatar);

      const res = await axios.post(
        "http://localhost:4000/api/v1/users/register",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      toast.success(res.data.message || "Signed up successfully!");
      setForm({
        fullName: "",
        username: "",
        email: "",
        password: "",
      });
      setAvatar(null);
      // Optionally navigate
      setTimeout(() => navigate("/"), 1200);
    } catch (err) {
      toast.error(
        err?.response?.data?.message ||
          "Error during registration. Please try again."
      );
    } finally {
      setForm({
        fullName: "",
        username: "",
        email: "",
        password: "",
      });
      setAvatar(null);
    }
  };

  return (
    <div className="SignUp-Page row g-0 p-5 text-white">
      <div className="SignUp-Div col-md-5 p-5 text-center align-items-center">
        <h3 className="fw-bold mb-5">Create Your Account</h3>
        <form
          className="text-start d-flex flex-column align-items-center"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="fullName"
            placeholder="Enter Full Name"
            className="form-control mb-3 w-75 rounded-5"
            value={form.fullName}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="username"
            placeholder="Enter User Name"
            className="form-control mb-3 w-75 rounded-5"
            value={form.username}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Enter Your Email Address"
            className="form-control mb-3 w-75 rounded-5"
            value={form.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Create Password"
            className="form-control mb-3 w-75 rounded-5"
            value={form.password}
            onChange={handleChange}
            required
          />
          <input
            type="file"
            name="avatar"
            accept="image/*"
            className="form-control mb-3 w-75 rounded-5"
            onChange={handleAvatarChange}
            required
          />

          <button
            className="btn btn-danger fw-bold px-4 rounded-5"
            type="submit"
          >
            Sign up
          </button>
        </form>
      </div>
      <div className="Login-Img col-md-7 d-flex justify-content-center">
        <img
          src={SignUpImg}
          alt="Event"
          className="SignUp-Img img-fluid rounded-2 shadow-lg"
        />
      </div>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default SignUp;
