import React, { useState } from "react";
import { Container, Row, Col, Card, Button, Badge } from "react-bootstrap";

const EventCard = ({ event }) => (
  <Card className="h-100 shadow border-0 rounded-4 overflow-hidden">
    <div className="position-relative">
      <Card.Img
        variant="top"
        src={
          event.img ||
          "https://media.insider.in/image/upload/c_crop,g_custom/v1743521846/s0tsemkrem7ijtcqybnj.jpg"
        }
        alt={event.title}
        style={{
          height: "400px",
          width: "100%",
          objectFit: "cover",
        }}
      />
      {event.promo && (
        <Badge
          bg="primary"
          className="position-absolute start-0 bottom-0 w-100 text-white rounded-0 fs-6 py-2"
          style={{ borderBottomLeftRadius: 0, borderBottomRightRadius: "16px" }}
        >
          {event.promo}
        </Badge>
      )}
    </div>
    <Card.Body className="pt-3 pb-2">
      <div className="mb-1 text-secondary small fw-semibold">{event.date}</div>
      <Card.Title className="fw-bold fs-5 mb-1">{event.title}</Card.Title>
      <div className="mb-2 text-muted small">{event.venue}</div>
      <div className="fw-bold">{event.price || "Free"}</div>
    </Card.Body>
  </Card>
);

// Your original data structure (modified to include img and price fields)
const allEvents = [
  {
    id: 1,
    title: "All Star Comedy Show ft. Your Favourite Comedians",
    venue: "Canvas Laugh Club",
    date: "Today, 7:00 PM",
    price: "₹1999 onwards",
    promo: "Pay only 50% to reserve your tickets",
    img: "https://media.insider.in/image/upload/c_crop,g_custom/v1756987926/pr7s3fjv1w5trer0szf2.png",
    isBig: true,
  },
  {
    id: 2,
    title: "IPL 2024: Delhi Capitals vs...",
    venue: "Feroz Shah Kotla",
    date: "Tomorrow, 7:30 PM",
    price: "₹2500 onwards",
    img: "https://media.insider.in/image/upload/c_crop,g_custom/v1756999925/m6gmdpmfdnpsrri6synm.png",
    isBig: true,
  },
  {
    id: 3,
    title: "IPL 2024: Mumbai Indians vs...",
    venue: "Wankhede Stadium",
    date: "This Weekend, 7:30 PM",
    price: "₹3000 onwards",
    promo: "Pay only 50% to reserve your tickets",
    img: "https://media.insider.in/image/upload/c_crop,g_custom/v1757303154/tkmh7tprqfptdjxcki4u.png",
    isBig: true,
  },
  {
    id: 4,
    title: "Music Night at Deli Cafe",
    venue: "Deli Lake",
    date: "Fri, 8:00 PM",
    price: "₹500",
    img: "https://media.insider.in/image/upload/c_crop,g_custom/v1754904330/vipsq91tydphmwjrylhw.jpg",
    isBig: true,
  },
  {
    id: 5,
    title: "Heritage Walk",
    venue: "Old Delhi",
    date: "Sat, 10:00 AM",
    price: "Free",
    isBig: true,
  },
  {
    id: 6,
    title: "Yoga Workshop",
    venue: "Park Hyatt",
    date: "Sun, 6:00 AM",
    price: "₹300",
    isBig: false,
  },
  {
    id: 7,
    title: "Rock Band Live",
    venue: "Aman Gopi Live",
    date: "Today, 9:00 PM",
    price: "₹800",
    isBig: false,
  },
];

// Your original filters
const dayFilters = ["All events", "Today", "Tomorrow", "This Weekend"];
const genreFilters = ["Under ₹500", "Comedy", "Standup", "Free"];

const EventsGrid = () => {
  const [activeDayFilter, setActiveDayFilter] = useState("All events");

  // Your original filtering logic
  const filteredEvents = allEvents.filter(
    (event) =>
      activeDayFilter === "All events" ||
      event.date.includes(activeDayFilter.split(" ")[0])
  );

  const bigEvents = filteredEvents.filter((e) => e.isBig);
  const smallEvents = filteredEvents.filter((e) => !e.isBig);

  return (
    <Container className="my-5">
      <h3 className="mb-4">All Events</h3>

      {/* Your original Day Filters */}
      <div className="mb-4">
        {dayFilters.map((filter) => (
          <Button
            key={filter}
            variant={activeDayFilter === filter ? "dark" : "outline-secondary"}
            onClick={() => setActiveDayFilter(filter)}
            className="rounded-pill me-2 mb-2"
            size="sm"
          >
            {filter}
          </Button>
        ))}
      </div>

      {/* Your original Genre/Price Filters */}
      <div className="mb-5">
        {genreFilters.map((filter) => (
          <Button
            key={filter}
            variant="light"
            className="rounded-pill border text-dark me-2 mb-2"
            size="sm"
          >
            {filter}
          </Button>
        ))}
      </div>

      {/* Big Event Cards with new styling - 4 per row on large screens */}
      <Row xs={1} md={2} lg={4} className="g-4 mb-5">
        {bigEvents.map((event) => (
          <Col key={event.id}>
            <EventCard event={event} />
          </Col>
        ))}
      </Row>

      {/* Small Event Cards - simplified list style */}
      <Row xs={1} md={2} className="g-3">
        {smallEvents.map((event) => (
          <Col key={event.id}>
            <div className="py-2 border-bottom">
              <p className="fw-bold mb-1">{event.title}</p>
              <small className="text-secondary">
                {event.venue} | {event.date} | {event.price}
              </small>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default EventsGrid;
