import React from "react";
import {
  IoMailOutline,
  IoLogoFacebook,
  IoLogoInstagram,
} from "react-icons/io5";

const Footer = () => {
  return (
    <div
      className="row d-flex mx-auto text-light pt-4"
      style={{ backgroundColor: "#1A1331" }}
    >
      <div className="col-md-3 d-flex flex-column align-items-center pb-5 gap-2">
        <h1 style={{ color: "#e11717ff" }} className="">
          <span className="text-light">ev</span>Ently
        </h1>
        <div className="social-media d-flex gap-3">
          <IoLogoInstagram style={{ cursor: "pointer" }} size={30} />
          <IoLogoFacebook style={{ cursor: "pointer" }} size={30} />
          <IoMailOutline style={{ cursor: "pointer" }} size={30} />
        </div>
      </div>

      <div className="col-md-9 d-flex ">
        <div className="row">
          <div className="col-md-3 col-sm-6">
            <ul>
              <h4 className="text-warning">SIETE FOODS</h4>
              <li className="footer-li">Carees</li>
              <li className="footer-li">Blog</li>
              <li className="footer-li">Siete Juntos Fund</li>
              <li className="footer-li">Videos</li>
              <li className="footer-li">Terms of Service</li>
              <li className="footer-li">Privacy Policy</li>
              <li className="footer-li">Do Not Sell</li>
            </ul>
          </div>

          <div className="col-md-3 col-sm-6 ">
            <ul>
              <h4 className="text-warning">WAYS TO SHOP</h4>
              <li className="footer-li">Subscribe & Save</li>
              <li className="footer-li">Amazon</li>
              <li className="footer-li">Find A Store</li>
              <li className="footer-li">Faire Wholesale</li>
              <li className="footer-li">Siete Wholesale</li>
              <li className="footer-li">Corporate Buying</li>
            </ul>
          </div>

          <div className="col-md-3 col-sm-6">
            <ul>
              <h4 className="text-warning">MY SIETE ACCOUNT</h4>
              <li className="footer-li">My Account</li>
              <li className="footer-li">Order & Subscriptions</li>
            </ul>
          </div>

          <div className="col-md-3 col-sm-6 ">
            <ul className="FooterUL">
              <h4 className="text-warning">HELP & FAQS</h4>
              <li className="footer-li">Contact Us</li>
              <li className="footer-li">FAQ</li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="border border-5 border-light" />
    </div>
  );
};

export default Footer;
