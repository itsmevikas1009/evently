import React from "react";
import partyGirl from "../assets/partyGirl.png";

const HeroSection = () => {
  return (
    <section
      style={{ backgroundColor: "#36104A"}}
      className="hero-section text-white"
    >
      <div className="container-fluid">
        <div className="row p-5 align-items-center">
          {/* Left Column */}
          <div className="col-md-6 p-5">
            <p className="mb-2 text-pink fw-semibold">Time to party</p>
            <h1 className="fw-bold display-4 mb-3">
              Organization <br />
              <span className="fw-normal">of</span><span> </span>
              <span className="text-primary">company</span> <br />
              <span className="text-danger">events</span>
            </h1>
            <p className="lead mb-4">
              Erat scelerisque lobortis nisl sed elementum massa. Et eu viverra
              nisi, adipiscing mauris. Pulvinar phasellus mattis pellentesque.
            </p>
            <div className="d-flex gap-3">
              <button className="btn btn-danger px-4 py-2 fw-bold rounded-3">
                Book event →
              </button>
              <button className="btn btn-outline-light px-4 py-2 fw-bold rounded-3">
                See events →
              </button>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="col-md-6 d-flex justify-content-center">
            <div className="position-relative">
              <img
                src={partyGirl}
                alt="Event"
                className="img-fluid rounded-3 shadow-lg"
                style={{ maxHeight: "500px", objectFit: "cover" }}
              />
              {/* Promo button */}
              <button className="btn btn-dark text-white rounded-3 position-absolute bottom-0 start-0 m-3 px-4 py-2">
                🎥 See promotion video
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
