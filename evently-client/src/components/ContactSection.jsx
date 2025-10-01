import React from "react";

const ContactSection = () => {
  return (
    <section className="py-5 bg-dark text-white">
      <div className="container text-center">
        <h2 className="fw-bold mb-4">Get In Touch</h2>
        <div className="row justify-content-center">
          <div className="col-md-6">
            <form className="text-start">
              <input
                type="text"
                className="form-control mb-3"
                placeholder="Your Name"
              />
              <input
                type="email"
                className="form-control mb-3"
                placeholder="Your Email"
              />
              <textarea
                className="form-control mb-3"
                rows="4"
                placeholder="Your Message"
              ></textarea>
              <button className="btn btn-danger w-100">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
