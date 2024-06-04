import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import aboutImage from "../../assets/image/aboutus.jpg";
import "./about.css";

const AboutUs = () => {
  return (
    <Container className="mt-5">
      <Row>
        {/* Kolom untuk gambar di sebelah kiri */}
        <Col md={6}>
          <img src={aboutImage} alt="About Us" className="img-fluid" />
        </Col>
        {/* Kolom untuk teks di sebelah kanan */}
        <Col md={6}>
          <div className="aboutus-text">
            <div className="heading-about">About Us</div>
            <p>
              Our platform is dedicated to providing a user-friendly and
              efficient ticket purchasing experience for entertainment events.
              We focus on identifying key features for a smooth and enjoyable
              process, designing an easy-to-use interface for all users,
              developing effective search and filter options, and ensuring
              security in every payment transaction. We believe this dedication
              will enhance your experience in buying tickets for entertainment
              events.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUs;
