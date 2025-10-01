import React from "react";

const gallery = [
  "https://source.unsplash.com/400x300/?wedding,event",
  "https://source.unsplash.com/400x300/?party,celebration",
  "https://source.unsplash.com/400x300/?conference,meeting",
  "https://source.unsplash.com/400x300/?concert,event",
  "https://source.unsplash.com/400x300/?birthday,party",
  "https://source.unsplash.com/400x300/?award,ceremony",
];

const GallerySection = () => {
  return (
    <section className="py-5 bg-dark">
      <div className="container text-center text-white">
        <h2 className="fw-bold mb-4">Event Gallery</h2>
        <div className="row g-3">
          {gallery.map((img, i) => (
            <div key={i} className="col-md-4">
              <img src={img} alt="Event" className="img-fluid rounded shadow-lg" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
