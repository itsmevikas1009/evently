import React from "react";
import partyGirl from "../assets/partyGirl.png";
import {Link} from "react-router-dom"

const HeroSection = () => {
  return (
    <section
      style={{ backgroundColor: "#36104A" }}
      className="hero-section text-white"
    >
      <div className="container-fluid">
        <div className="row p-1 align-items-center">
          {/* Left Column */}
          <div className="col-md-6 p-4 text-center text-md-start">
            <p className="mb-2 text-pink fw-semibold fs-6 fs-md-5">
              Time to party
            </p>
            <h1 className="fw-bold display-5 display-md-4 mb-3">
              Organization <br />
              <span className="fw-normal">of</span>{" "}
              <span className="text-primary">company</span> <br />
              <span className="text-danger">events</span>
            </h1>
            <p className="lead mb-4 fs-6 fs-md-5">
              Erat scelerisque lobortis nisl sed elementum massa. Et eu viverra
              nisi, adipiscing mauris. Pulvinar phasellus mattis pellentesque.
            </p>
            <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-md-start">
              <button className="btn btn-danger px-4 py-2 fw-bold rounded-3 w-100 w-sm-auto">
                Book event →
              </button>
              <Link to="/events" className="btn btn-outline-light px-4 py-2 fw-bold rounded-3 w-100 w-sm-auto">
                See events →
              </Link>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="col-md-6 d-flex justify-content-center mt-4 mt-md-0">
            <div
              className="position-relative w-100"
              style={{ maxWidth: "500px" }}
            >
              <img
                src={partyGirl}
                alt="Event"
                className="img-fluid rounded-3 shadow-lg"
                style={{ objectFit: "cover" }}
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
