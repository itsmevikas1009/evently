import React from "react";
import { FaSalesforce } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { SiZoho, SiTcs } from "react-icons/si";

const partners = [
  <FaSalesforce size={100} />,
  <FcGoogle size={100} />,
  <SiZoho size={100} />,
  <SiTcs size={100} />,
];

const PartnersSection = () => {
  return (
    <section className="py-5 bg-light">
      <div className="container text-center">
        <h2 className="fw-bold mb-4">Trusted By</h2>
        <div className="d-flex justify-content-center gap-5 flex-wrap">
          {partners.map((logo, i) => logo)}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
