import React from "react";
import { Container, Button, Row, Col } from "react-bootstrap";

const HeroBanner = () => {


  return (
    <div
      // Main banner container - uses flex for vertical centering
      className="text-white d-flex align-items-center"
      style={{
        minHeight: "90vh", 
        padding: '2rem 0',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "#333", // Fallback color
      }}
    >
      <Container>
        <Row className="align-items-center h-100">
          
          {/* Content Column (Text & Button) 
              The Col will stretch to match the image height automatically.
          */}
          <Col 
            xs={12} 
            md={6} 
            // Removed p-4 and background color from Col
            className="d-flex align-items-center" 
          >
            {/* INNER DIV: Uses h-100 to fill the Col height, and applies the background and padding */}
            <div
              className="p-4 rounded-3 d-flex flex-column justify-content-center"
              style={{ 
                // Only add margin on mobile (xs) to separate it if the image is hidden
                marginBottom: '1rem', 
              }}
            >
              <h1 className="display-4 fw-bold">Heritage India Tour | Dr. Satinder Sartaaj Live In Rohtak</h1>
              <p className="lead mb-4">
                Jawaharlal Nehru Stadium, Delhi/NCR
              </p>
              <Button variant="light" size="lg" className="rounded-pill shadow">
                Explore Events
              </Button>
            </div>
          </Col>

          {/* Image/Graphic Column - Visible only on medium screens (md) and up 
             d-none hides it on xs/sm, d-md-flex shows it on md+
          */}
          <Col
            md={6}
            className="d-flex justify-content-center align-items-center"
          >
            <img
              src="https://media.insider.in/image/upload/c_crop,g_custom/v1759754970/ar1ogleu5aqneytbfg2i.jpg"
              alt="People enjoying an event"
              className="img-fluid rounded shadow-2xl border border-white border-opacity-50"
              style={{ 
                maxHeight: "80vh", 
                width: "80%",
                borderRadius: '12px',
              }}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeroBanner;
