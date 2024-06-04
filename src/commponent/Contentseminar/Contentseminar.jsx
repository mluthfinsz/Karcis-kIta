import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Seminar from "../../assets/image/Seminar.jpg";
import "./contentseminar.css";

function BasicExample() {
  return (
    <div>
      <h2 style={{ textAlign: "center", fontWeight: "bold" }}>Seminar</h2>
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
              src={Seminar}
              style={{ width: "100%", height: "150px", objectFit: "cover" }}
            />
            <Card.Body>
              <Card.Title className="concert-music">Seminar</Card.Title>
              <Card.Title className="event-name">
                Academi Carrer Talk
              </Card.Title>
              <Card.Text>Free Register</Card.Text>
              <Card.Text>MARCH 31</Card.Text>
              <Card.Text>Zoom Meeting</Card.Text>
            </Card.Body>
          </Link>
        </Card>

        <Card style={{ width: "calc(25% - 20px)", marginRight: "10px" }}>
          <Link to="/">
            <Card.Img
              variant="top"
              src={Seminar}
              style={{ width: "100%", height: "150px", objectFit: "cover" }}
            />
            <Card.Body>
              <Card.Title className="concert-music">Seminar</Card.Title>
              <Card.Title className="event-name">
                Academi Carrer Talk
              </Card.Title>
              <Card.Text>Free Register</Card.Text>
              <Card.Text>MARCH 31</Card.Text>
              <Card.Text>Zoom Meeting</Card.Text>
            </Card.Body>
          </Link>
        </Card>

        <Card style={{ width: "calc(25% - 20px)", marginRight: "10px" }}>
          <Link to="/">
            <Card.Img
              variant="top"
              src={Seminar}
              style={{ width: "100%", height: "150px", objectFit: "cover" }}
            />
            <Card.Body>
              <Card.Title className="concert-music">Seminar</Card.Title>
              <Card.Title className="event-name">
                Academi Carrer Talk
              </Card.Title>
              <Card.Text>Free Register</Card.Text>
              <Card.Text>MARCH 31</Card.Text>
              <Card.Text>Zoom Meeting</Card.Text>
            </Card.Body>
          </Link>
        </Card>

        <Card style={{ width: "calc(25% - 20px)" }}>
          <Link to="/">
            <Card.Img
              variant="top"
              src={Seminar}
              style={{ width: "100%", height: "150px", objectFit: "cover" }}
            />
            <Card.Body>
              <Card.Title className="concert-music">Seminar</Card.Title>
              <Card.Title className="event-name">
                Academi Carrer Talk
              </Card.Title>
              <Card.Text>Free Register</Card.Text>
              <Card.Text>MARCH 31</Card.Text>
              <Card.Text>Zoom Meeting</Card.Text>
            </Card.Body>
          </Link>
        </Card>
      </div>
    </div>
  );
}

export default BasicExample;
