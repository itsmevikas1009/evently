import React from "react";

const partners = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTPAWYqoR1E-YMPwd869I0X2WuToOjTrPXgQ&s",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Wipro_new_logo.svg/250px-Wipro_new_logo.svg.png",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyScqUYp_Z4-y_t5SnC4zgucTtum5yuJUe0A&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo3jOlcCpBaxcVojG4xYz7T1asxM0lGt1a5A&s",
];

const PartnersSection = () => {
  return (
    <section className="py-5 bg-light">
      <div className="container text-center">
        <h2 className="fw-bold mb-4">Trusted By</h2>
        <div className="d-flex justify-content-center align-items-center gap-4 flex-wrap">
          {partners.map((logo, i) => (
            <img key={i} src={logo} alt="Partner" className="img-fluid" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;