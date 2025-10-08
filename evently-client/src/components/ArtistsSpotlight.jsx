import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const featuredArtists = [
  {
    name: "Don Toliver",
    img: "https://media.insider.in/image/upload/c_crop,g_custom/v1756987926/pr7s3fjv1w5trer0szf2.png",
  },
  {
    name: "DJ Scheme",
    img: "https://media.insider.in/image/upload/c_crop,g_custom/v1757303154/tkmh7tprqfptdjxcki4u.png",
  },
  {
    name: "Karan Aujla",
    img: "https://media.insider.in/image/upload/c_crop,g_custom/v1756999925/m6gmdpmfdnpsrri6synm.png",
  },
  {
    name: "Akon",
    img: "https://media.insider.in/image/upload/c_crop,g_custom/v1754904330/vipsq91tydphmwjrylhw.jpg",
  },
];

const ArtistsSpotlight = () => (
  <Container className="my-5">
    <h3 className="mb-4">Artists in your District</h3>
    <Row>
      {featuredArtists.map((artist, index) => (
        <Col
          key={index}
          xs={12}
          sm={6}
          md={4}
          lg={3}
          className="mb-4 d-flex justify-content-center"
        >
          <div
            style={{ cursor: "pointer", width: "100%" }}
            className="text-center"
          >
            <div
              className="bg-secondary rounded-circle mb-2 mx-auto"
              style={{
                width: "200px",
                height: "200px",
                backgroundImage: `url(${artist.img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
              }}
            />
            <p className="small mb-0 mt-2">{artist.name}</p>
          </div>
        </Col>
      ))}
    </Row>
  </Container>
);

export default ArtistsSpotlight;
