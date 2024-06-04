import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import teamImage from "../../assets/image/Tim.jpg"; // Impor gambar
import "./team.css";

const TeamComponent = () => {
  return (
    <Container>
      <Row>
        <Col className="col-centered">
          <h1 className="text-center">Be a part of KarcisKita Team!</h1>
          <div className="text-center">
            <img
              src={teamImage}
              alt="KarcisKita Team"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default TeamComponent;
