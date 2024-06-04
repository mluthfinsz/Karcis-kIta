import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom"; // Impor Link dari react-router-dom
import aboutImage from "../../assets/image/About.jpg"; // Impor gambar
import "./aboutus.css"; // Impor gaya CSS

const AboutUs = () => {
  return (
    <Container className="mt-5">
      <Row>
        <Col md={6}>
          <div className="about-text">
            <h1>
              Unlock the Ultimate Event Experience with <br />
              <span>KarcisKita</span>.
            </h1>

            <p>
              With our commitment to providing the best user experience, we aim
              to become the top choice for users in searching for and purchasing
              tickets to their favorite entertainment events.
            </p>

            {/* Tambahkan tombol untuk menuju halaman Create Event */}
            <Link to="/create-event">
              <Button variant="primary" className="create-event-btn">
                Create Event
              </Button>
            </Link>
          </div>
        </Col>
        <Col md={6}>
          <img
            src={aboutImage}
            alt="ChatGPT"
            className="img-fluid"
            style={{ width: "90%", height: "auto" }}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUs;
