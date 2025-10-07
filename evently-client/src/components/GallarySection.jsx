import React from "react";
import gl1 from "../assets/g1.jpeg"
import gl2 from "../assets/g2.jpeg"
import gl3 from "../assets/g3.jpeg"
import gl4 from "../assets/g4.jpeg"
import gl5 from "../assets/g5.jpeg"
import gl6 from "../assets/g6.jpeg"

const gallery = [
  gl1,
  gl2,
  gl3,
  gl4,
  gl5,
  gl6
];

const GallerySection = () => {
  return (
    <section className="py-5 bg-dark">
      <div className="container text-center text-white">
        <h2 className="fw-bold mb-4">Event Gallery</h2>
        <div className="row g-3">
          {gallery.map((img, i) => (
            <div key={i} className="col-md-4">
              <img
                src={img}
                alt="Event"
                className="img-fluid rounded shadow-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
