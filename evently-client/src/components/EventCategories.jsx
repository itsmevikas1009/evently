import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const categories = [
  { name: "Music", icon: "🎵" },
  { name: "Comedy", icon: "😂" },
  { name: "Sports", icon: "⚽" },
  { name: "Workshops", icon: "🛠️" },
  { name: "Food & Drink", icon: "🍔" },
  { name: "Arts & Culture", icon: "🎭" },
  { name: "Parties", icon: "🎉" },
];

const EventCategories = () => {
  return (
    <Container className="my-5">
      <h3 className="mb-4">EXPLORE EVENTS</h3>
      <div className="d-flex overflow-auto pb-2">
        {categories.map((cat) => (
          <div
            key={cat.name}
            className="text-center me-4 flex-shrink-0"
            style={{ cursor: "pointer", width: "20vw" }}
          >
            <div
              className="bg-light rounded-circle d-flex align-items-center justify-content-center mb-1"
              style={{
                width: "20vw",
                height: "20vw",
                fontSize: "50px",
              }}
            >
              {cat.icon}
            </div>
            <small className="text-muted">{cat.name}</small>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default EventCategories;
