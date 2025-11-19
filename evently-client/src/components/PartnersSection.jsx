import React from "react";

const partners = [
  "https://dummyimage.com/150x80/000/fff&text=Company+1",
  "https://dummyimage.com/150x80/111/fff&text=Company+2",
  "https://dummyimage.com/150x80/222/fff&text=Company+3",
  "https://dummyimage.com/150x80/333/fff&text=Company+4",
];

const PartnersSection = () => {
  return (
    <section className="py-5 bg-light">
      <div className="container text-center">
        <h2 className="fw-bold mb-4">Trusted By</h2>
        <div className="d-flex justify-content-center gap-4 flex-wrap">
          {partners.map((logo, i) => (
            <img key={i} src={logo} alt="Partner" className="img-fluid" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
