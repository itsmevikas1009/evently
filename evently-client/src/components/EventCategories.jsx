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

const EventCategories = () => (
  <Container className="my-5">
    <h3 className="mb-4">EXPLORE EVENTS</h3>
    <Row>
      {categories.map((cat) => (
        <Col
          key={cat.name}
          xs={6} // 2 columns on extra small screens
          md={3} // 4 columns on medium (≥768px) and large (≥992px) screens
          className="mb-4 d-flex justify-content-center"
        >
          <div
            className="text-center"
            style={{ cursor: "pointer", width: "100%" }}
          >
            <div
              className="bg-light rounded-circle d-flex align-items-center justify-content-center mx-auto mb-1"
              style={{
                width: "75px",
                height: "75px",
                fontSize: "2.5rem",
              }}
            >
              {cat.icon}
            </div>
            <small className="text-muted">{cat.name}</small>
          </div>
        </Col>
      ))}
    </Row>
  </Container>
);

export default EventCategories;
