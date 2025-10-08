import React from "react";
import { Container, Row, Col, Button, Carousel } from "react-bootstrap";

// Dynamic Slide Data
const bannerSlides = [
  {
    title: "Heritage India Tour | Dr. Satinder Sartaaj Live In Rohtak",
    subtitle: "Jawaharlal Nehru Stadium, Delhi/NCR",
    image:
      "https://media.insider.in/image/upload/c_crop,g_custom/v1759754970/ar1ogleu5aqneytbfg2i.jpg",
    cta: "Explore Events",
  },
  {
    title: "Zamna India | Gurugram",
    subtitle: "Venue to be announced, Gurugram",
    image:
      "https://media.insider.in/image/upload/c_crop,g_custom/v1756987926/pr7s3fjv1w5trer0szf2.png",
    cta: "Reserve Tickets",
  },
  {
    title: "Akon India Tour 2025 | Delhi",
    subtitle: "Gate No 14, Jawaharlal Nehru Stadium, Delhi/NCR",
    image:
      "https://media.insider.in/image/upload/c_crop,g_custom/v1754904330/vipsq91tydphmwjrylhw.jpg",
    cta: "Book Now",
  },
];

const HeroCarousel = () => (
  <div
    className="text-white"
    style={{
      minHeight: "80vh",
      padding: "2rem 0",
      backgroundColor: "#333",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    <Carousel interval={5000} indicators={true} controls={true} fade>
      {bannerSlides.map((slide, idx) => (
        <Carousel.Item key={idx}>
          <Container>
            <Row className="align-items-center">
              {/* Text Content */}
              <Col
                xs={12}
                md={6}
                className="d-flex align-items-center justify-content-center"
              >
                <div
                  className="p-4 rounded-3 d-flex flex-column justify-content-center w-100"
                  style={{
                    marginBottom: "1rem",
                    background: "rgba(0,0,0,0.25)",
                  }}
                >
                  <h1 className="display-5 fw-bold">{slide.title}</h1>
                  <p className="lead mb-4">{slide.subtitle}</p>
                  <Button
                    variant="light"
                    size="lg"
                    className="rounded-pill shadow"
                  >
                    {slide.cta}
                  </Button>
                </div>
              </Col>
              {/* Banner Image */}
              <Col
                md={6}
                className="d-flex justify-content-center align-items-center"
              >
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="img-fluid rounded shadow-2xl border border-white border-opacity-50 d-none d-md-block"
                  style={{
                    maxHeight: "70vh",
                    width: "85%",
                    borderRadius: "12px",
                  }}
                />
              </Col>
            </Row>
          </Container>
        </Carousel.Item>
      ))}
    </Carousel>
  </div>
);

export default HeroCarousel;
