import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import NCTImage from "../../assets/image/NCTIMG.jpg";
import AVG from "../../assets/image/AVGIMG.jpg";
import NIALL from "../../assets/image/NIALLIMG.jpg";
import "./topselling.css";

function ShapeExample() {
  return (
    <div>
      <h2 style={{ textAlign: "center", fontWeight: "bold" }}>Top Selling</h2>
      <Container>
        <Row>
          <Col xs={6} md={4}>
            <Image
              src={NCTImage}
              rounded
              style={{ width: "360px", height: "auto" }} // Ubah nilai width untuk memperbesar gambar
            />
          </Col>
          <Col xs={6} md={4}>
            <Image
              src={AVG}
              rounded
              style={{ width: "360px", height: "auto" }} // Ubah nilai width untuk memperbesar gambar
            />
          </Col>
          <Col xs={6} md={4}>
            <Image
              src={NIALL}
              rounded
              style={{ width: "360px", height: "auto" }} // Ubah nilai width untuk memperbesar gambar
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ShapeExample;
