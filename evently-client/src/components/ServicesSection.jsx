import React from "react";
import { Briefcase, CalendarEvent, People, Award } from "react-bootstrap-icons";

const services = [
  { icon: <Briefcase size={40} className="text-danger" />, title: "Corporate Events", desc: "Professional planning for meetings, seminars & conferences." },
  { icon: <CalendarEvent size={40} className="text-primary" />, title: "Wedding Planning", desc: "Memorable wedding arrangements tailored to your style." },
  { icon: <People size={40} className="text-success" />, title: "Social Gatherings", desc: "Birthday parties, anniversaries & private functions." },
  { icon: <Award size={40} className="text-warning" />, title: "Award Functions", desc: "Elegant award nights & celebrations with style." },
];

const ServicesSection = () => {
  return (
    <section className="py-5 bg-light">
      <div className="container text-center">
        <h2 className="fw-bold mb-4">Our Services</h2>
        <div className="row g-4">
          {services.map((s, i) => (
            <div key={i} className="col-md-3">
              <div className="card border-0 shadow h-100 p-4">
                {s.icon}
                <h5 className="mt-3 fw-bold">{s.title}</h5>
                <p className="text-muted">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
