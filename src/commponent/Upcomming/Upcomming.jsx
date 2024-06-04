import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Niall from "../../assets/image/nial.jpg";
import NCT from "../../assets/image/NCT.jpg";
import Avenged from "../../assets/image/Avenged.jpg";
import Fest from "../../assets/image/fest.jpg";
import "./upcomming.css";

function BasicExample() {
  return (
    <div>
      <h2 style={{ textAlign: "center", fontWeight: "bold" }}>
        Upcoming Event
      </h2>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          margin: "40px",
        }}
      >
        <Card style={{ width: "calc(25% - 20px)", marginRight: "10px" }}>
          <Link to="/">
            <Card.Img
              variant="top"
              src={Niall}
              style={{ width: "100%", height: "150px", objectFit: "cover" }}
            />
            <Card.Body>
              <Card.Title className="concert-music">Concert Music</Card.Title>
              <Card.Title className="event-name">NIALL HORAND</Card.Title>
              <Card.Text>Rp. 150.000 - 300.000</Card.Text>
              <Card.Text>MAY 11</Card.Text>
              <Card.Text>Beach City International</Card.Text>
            </Card.Body>
          </Link>
        </Card>

        <Card style={{ width: "calc(25% - 20px)", marginRight: "10px" }}>
          <Link to="/">
            <Card.Img
              variant="top"
              src={NCT}
              style={{ width: "100%", height: "150px", objectFit: "cover" }}
            />
            <Card.Body>
              <Card.Title className="concert-music">Concert Music</Card.Title>
              <Card.Title className="event-name">THE DREAM SHOW 3</Card.Title>
              <Card.Text>Rp. 1.050.000 - 3.350.000</Card.Text>
              <Card.Text>MAY 18</Card.Text>
              <Card.Text>Stadion Utama GBK</Card.Text>
            </Card.Body>
          </Link>
        </Card>

        <Card style={{ width: "calc(25% - 20px)", marginRight: "10px" }}>
          <Link to="/">
            <Card.Img
              variant="top"
              src={Avenged}
              style={{ width: "100%", height: "150px", objectFit: "cover" }}
            />
            <Card.Body>
              <Card.Title className="concert-music">Concert Music</Card.Title>
              <Card.Title className="event-name">Avenged Sevenfold</Card.Title>
              <Card.Text>Rp. 1.600.000 - 2.600.000</Card.Text>
              <Card.Text>MAY 25</Card.Text>
              <Card.Text>Satdion Madya GBK</Card.Text>
            </Card.Body>
          </Link>
        </Card>

        <Card style={{ width: "calc(25% - 20px)" }}>
          <Link to="/">
            <Card.Img
              variant="top"
              src={Fest}
              style={{ width: "100%", height: "150px", objectFit: "cover" }}
            />
            <Card.Body>
              <Card.Title className="concert-music">Concert Music</Card.Title>
              <Card.Title className="event-name">Sound Fest 2024</Card.Title>
              <Card.Text>Rp. 150.000 - 300.000</Card.Text>
              <Card.Text>MAY 25</Card.Text>
              <Card.Text>Parking Ground SMB</Card.Text>
            </Card.Body>
          </Link>
        </Card>
      </div>
    </div>
  );
}

export default BasicExample;
