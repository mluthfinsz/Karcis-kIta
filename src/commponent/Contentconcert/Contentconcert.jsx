import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Bruno from "../../assets/image/Bruno.jpg";
import Phum from "../../assets/image/Phum.jpg";
import Sore from "../../assets/image/Sore.jpg";
import Sophia from "../../assets/image/Sophia.jpg";
import "./contentconcert.css";

function BasicExample() {
  return (
    <div>
      <h2 style={{ textAlign: "center", fontWeight: "bold" }}>Concert</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          margin: "40px", // Menghilangkan spasi antara kartu-kartu
        }}
      >
        <Card style={{ width: "calc(25% - 20px)", marginRight: "10px" }}>
          <Link to="/">
            <Card.Img
              variant="top"
              src={Bruno}
              style={{ width: "100%", height: "150px", objectFit: "cover" }}
            />
            <Card.Body>
              <Card.Title className="event-name">Bruno Major</Card.Title>
              <Card.Text>Rp. 350.000 - 500.000</Card.Text>
              <Card.Text>OCT 01</Card.Text>
              <Card.Text>Jakarta Convention Center</Card.Text>
            </Card.Body>
          </Link>
        </Card>

        <Card style={{ width: "calc(25% - 20px)", marginRight: "10px" }}>
          <Link to="/">
            <Card.Img
              variant="top"
              src={Phum}
              style={{ width: "100%", height: "150px", objectFit: "cover" }}
            />
            <Card.Body>
              <Card.Title className="event-name">Phum Viphurit</Card.Title>
              <Card.Text>Rp. 350.000 - 500.000</Card.Text>
              <Card.Text>OCT 10</Card.Text>
              <Card.Text>Jakarta Convention Center</Card.Text>
            </Card.Body>
          </Link>
        </Card>

        <Card style={{ width: "calc(25% - 20px)", marginRight: "10px" }}>
          <Link to="/">
            <Card.Img
              variant="top"
              src={Sore}
              style={{ width: "100%", height: "150px", objectFit: "cover" }}
            />
            <Card.Body>
              <Card.Title className="event-name">Sore</Card.Title>
              <Card.Text>Rp. 350.000 - 500.000</Card.Text>
              <Card.Text>OCT 04</Card.Text>
              <Card.Text>Jakarta Convention Center</Card.Text>
            </Card.Body>
          </Link>
        </Card>

        <Card style={{ width: "calc(25% - 20px)" }}>
          <Link to="/">
            <Card.Img
              variant="top"
              src={Sophia}
              style={{ width: "100%", height: "150px", objectFit: "cover" }}
            />
            <Card.Body>
              <Card.Title className="event-name">Sophia Anne Cruso</Card.Title>
              <Card.Text>Rp. 350.000 - 500.000</Card.Text>
              <Card.Text>OCT 30</Card.Text>
              <Card.Text>Jakarta Convention Center</Card.Text>
            </Card.Body>
          </Link>
        </Card>
      </div>
    </div>
  );
}

export default BasicExample;
