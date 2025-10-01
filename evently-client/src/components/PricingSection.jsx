import React from "react";

const plans = [
  { title: "Basic", price: "$299", features: ["Venue Booking", "Basic Catering", "Event Staff"], btn: "Choose Basic" },
  { title: "Premium", price: "$799", features: ["Decorations", "Entertainment", "Photography"], btn: "Choose Premium" },
  { title: "Custom", price: "Get Quote", features: ["Tailored Services", "VIP Arrangements", "24/7 Support"], btn: "Contact Us" },
];

const PricingSection = () => {
  return (
    <section className="py-5 bg-light">
      <div className="container text-center">
        <h2 className="fw-bold mb-4">Our Packages</h2>
        <div className="row g-4">
          {plans.map((plan, i) => (
            <div key={i} className="col-md-4">
              <div className="card border-0 shadow-lg h-100 p-4">
                <h4 className="fw-bold">{plan.title}</h4>
                <h2 className="text-danger fw-bold">{plan.price}</h2>
                <ul className="list-unstyled my-3">
                  {plan.features.map((f, j) => <li key={j} className="text-muted">✔ {f}</li>)}
                </ul>
                <button className="btn btn-danger px-4">{plan.btn}</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
