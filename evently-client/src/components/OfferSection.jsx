import React from "react";

const OfferSection = () => {
  return (
    <section className="py-5 bg-dark text-white">
      <div className="container text-center">

        <h2 className="fw-bold mb-3">Special Offers</h2>
        <p className="mb-5">
          Grab exciting deals and save more on your next event booking.
        </p>

        <div className="row g-4 justify-content-center">

          {/* Offer Card 1 */}
          <div className="col-12 col-md-4">
            <div className="card text-white bg-transparent border-0 shadow-lg h-100 rounded-4 p-3">
              <div className="card-body">
                <h4 className="card-title fw-bold">🔥 Early Bird Discount</h4>
                <p className="card-text mt-3">
                  Book your event <strong className="text-warning">45 days in advance</strong> and get  
                  <strong className="text-warning"> 20% OFF</strong>.
                </p>
                <button className="btn btn-danger rounded-pill fw-bold mt-3">
                  Grab Offer
                </button>
              </div>
            </div>
          </div>

          {/* Offer Card 2 */}
          <div className="col-12 col-md-4">
            <div className="card text-white bg-transparent border-0 shadow-lg h-100 rounded-4 p-3">
              <div className="card-body">
                <h4 className="card-title fw-bold">🎁 Festival Combo</h4>
                <p className="card-text mt-3">
                  Book any 2 events and get  
                  <strong className="text-warning"> Free Photography</strong>.
                </p>
                <button className="btn btn-danger rounded-pill fw-bold mt-3">
                  Claim Now
                </button>
              </div>
            </div>
          </div>

          {/* Offer Card 3 */}
          <div className="col-12 col-md-4">
            <div className="card text-white bg-transparent border-0 shadow-lg h-100 rounded-4 p-3">
              <div className="card-body">
                <h4 className="card-title fw-bold">💼 Corporate Deal</h4>
                <p className="card-text mt-3">
                  Get <strong className="text-warning">$150 OFF</strong> on corporate events booked this month.
                </p>
                <button className="btn btn-danger rounded-pill fw-bold mt-3">
                  Get Discount
                </button>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default OfferSection;
