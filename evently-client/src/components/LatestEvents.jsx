import React from "react";

const events = [
  {
    id: 1,
    title: "Corporate Annual Meet",
    date: "12 Oct 2025",
    img: "https://media.gettyimages.com/id/2215472306/photo/rick-tsai-chief-executive-officer-of-mediatek-inc-during-the-computex-conference-in-taipei.jpg?s=612x612&w=0&k=20&c=1RY67QH6IM2NVDoAZmI9AtAj1Odfjgh0kVBKzvMO82Q=",
  },
  {
    id: 2,
    title: "Luxury Gala Dinner",
    date: "18 Oct 2025",
    img: "https://www.shutterstock.com/shutterstock/photos/1068521564/display_1500/stock-photo-decorated-table-on-a-gala-dinner-party-with-wine-glasses-and-blurred-out-background-1068521564.jpg",
  },
  {
    id: 3,
    title: "Tech Innovation Summit",
    date: "22 Oct 2025",
    img: "https://www.shutterstock.com/shutterstock/photos/2378784679/display_1500/stock-photo-visitors-walking-through-dubai-municipality-at-rd-gitex-global-largest-tech-and-startup-2378784679.jpg",
  },
  {
    id: 4,
    title: "Music & Dance Night",
    date: "28 Oct 2025",
    img: "https://www.shutterstock.com/shutterstock/photos/2154356669/display_1500/stock-photo-a-crowded-concert-hall-with-scene-stage-lights-in-blue-tones-rock-show-performance-with-people-2154356669.jpg",
  },
  {
    id: 5,
    title: "Charity Fundraising Gala",
    date: "02 Nov 2025",
    img: "https://www.shutterstock.com/shutterstock/photos/331235918/display_1500/stock-photo-new-york-city-october-answer-the-call-staged-its-th-annual-gala-benefit-at-the-waldorf-331235918.jpg",
  },
  {
    id: 6,
    title: "Startup Networking",
    date: "06 Nov 2025",
    img: "https://media.gettyimages.com/id/1047707680/photo/multi-ethnic-business-colleagues-socialising-at-office-party.jpg?s=2048x2048&w=gi&k=20&c=u4OmbzlRcXKHVSCcZjALd2d894ndfOwnAPg05RI_9Vo=",
  },
  {
    id: 7,
    title: "Fashion & Lifestyle Expo",
    date: "12 Nov 2025",
    img: "https://www.shutterstock.com/shutterstock/photos/2375113143/display_1500/stock-photo-la-anime-expo-a-coser-at-her-stage-looking-at-lined-people-2375113143.jpg",
  },
  {
    id: 8,
    title: "Christmas Celebration",
    date: "24 Dec 2025",
    img: "https://media.gettyimages.com/id/1435628589/photo/multigeneration-family-on-the-living-room-exchancing-christmas-presents.jpg?s=2048x2048&w=gi&k=20&c=4h6PWWAgDeGXGrWM5NtSZYF4DRAs7Drl1fOUKKcV3ks=",
  },
];

const LatestEvents = () => {
  return (
    <section style={{ backgroundColor: "#260d33ff" }} className="py-5">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-5">
          <h2 className="fw-bold text-white">Latest Events</h2>
          <p className="text-light">
            Explore some of our most recent and exciting events.
          </p>
        </div>

        {/* Events Grid */}
        <div className="row g-4">
          {events.map((event) => (
            <div key={event.id} className="col-md-3">
              <div className="card border-0 shadow-lg h-100 rounded-3">
                <img
                  src={event.img}
                  alt={event.title}
                  className="card-img-top rounded-top-3"
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title fw-bold">{event.title}</h5>
                  <p className="text-muted">{event.date}</p>
                  <button className="btn btn-sm btn-danger mt-auto">
                    View Details →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestEvents;
