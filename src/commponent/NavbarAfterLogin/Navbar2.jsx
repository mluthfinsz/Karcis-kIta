import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import karciskitaImage from "../../assets/image/karciskita.jpg";
import "./navbar2.css";

function AppNavbar() {
  // Anda dapat menambahkan state untuk menyimpan status login dan username jika dibutuhkan
  const isLoggedIn = true; // Ganti dengan logika login yang sesuai
  const username = "JohnDoe"; // Ganti dengan username yang sesuai jika sudah login

  return (
    <Navbar className="custom-navbar" expand="lg">
      {/* Gambar di sebelah kiri */}
      <Navbar.Brand as={Link} to="/" style={{ width: "150px" }}>
        {" "}
        {/* Mengatur lebar logo */}
        <img
          src={karciskitaImage}
          width="150" // Menetapkan lebar gambar
          height="auto" // Biarkan tinggi gambar disesuaikan secara proporsional
          className="d-inline-block align-top"
          alt="Karciskita"
        />
      </Navbar.Brand>

      {/* Tautan menu di tengah */}
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto">
          <Nav.Link as={Link} to="/AfterLogin" className="nav-link">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/ConcertAfterLogin" className="nav-link">
            Concert
          </Nav.Link>
          <Nav.Link as={Link} to="/SeminarAfterLogin" className="nav-link">
            Seminar
          </Nav.Link>
          <Nav.Link as={Link} to="/create-event" className="nav-link">
            Create Event
          </Nav.Link>
          <Nav.Link as={Link} to="/OthersAfterLogin" className="nav-link">
            Others
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>

      {/* Tampilkan username di dalam tombol dropdown jika sudah login */}
      {isLoggedIn ? (
        <Nav className="ml-auto">
          <NavDropdown title={username} id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Settings</NavDropdown.Item>
            <NavDropdown.Divider />
            {/* Menggunakan Link untuk logout */}
            <NavDropdown.Item as={Link} to="/login">
              Logout
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      ) : (
        // Anda dapat menambahkan tautan untuk login jika belum login
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/signup" className="nav-link">
            Signup
          </Nav.Link>
          <Nav.Link as={Link} to="/login" className="nav-link">
            Login
          </Nav.Link>
        </Nav>
      )}
    </Navbar>
  );
}

export default AppNavbar;
