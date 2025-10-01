import React from "react";

const testimonials = [
  {
    name: "John Smith",
    role: "CEO, TechCorp",
    feedback: "They managed our annual meet flawlessly. Highly recommended!",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Sophia Lee",
    role: "Bride",
    feedback: "My wedding was magical thanks to their perfect planning.",
    img: "https://randomuser.me/api/portraits/women/45.jpg",
  },
  {
    name: "David Kim",
    role: "Event Organizer",
    feedback: "Creative, professional, and reliable for every event.",
    img: "https://randomuser.me/api/portraits/men/54.jpg",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-5 bg-dark text-white">
      <div className="container text-center">
        <h2 className="fw-bold mb-4">What Our Clients Say</h2>
        <div className="row g-4">
          {testimonials.map((t, i) => (
            <div key={i} className="col-md-4">
              <div className="card bg-secondary border-0 shadow-lg h-100 p-4 text-start">
                <div className="d-flex align-items-center mb-3">
                  <img
                    src={t.img}
                    alt={t.name}
                    className="rounded-circle me-3"
                    width="50"
                    height="50"
                  />
                  <div>
                    <h6 className="fw-bold m-0">{t.name}</h6>
                    <small className="text-light">{t.role}</small>
                  </div>
                </div>
                <p>"{t.feedback}"</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
