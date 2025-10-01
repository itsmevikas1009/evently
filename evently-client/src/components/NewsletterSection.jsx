import React from "react";

const NewsletterSection = () => {
  return (
    <section className="py-5 bg-danger text-white">
      <div className="container text-center">
        <h2 className="fw-bold mb-3">Stay Updated</h2>
        <p className="mb-4">Subscribe to our newsletter and never miss an event.</p>
        <div className="d-flex justify-content-center">
          <input type="email" placeholder="Enter your email" className="form-control w-50 rounded-start-3" />
          <button className="btn btn-dark rounded-end-3">Subscribe</button>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
