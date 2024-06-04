import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import Navbar from "../../commponent/Navbar/Navbar";
import "./signup.css"; // Import CSS file
import registerImage from "../../assets/image/karciskitalogo.jpg"; // Import gambar register

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    telephone: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lakukan validasi atau submit data ke backend
    console.log(formData);
  };

  return (
    <div>
      <Navbar /> {/* Tambahkan Navbar di sini */}
      <div className="container">
        <div className="custom-regis-image-container">
          <img src={registerImage} alt="Register" className="register-image" />
        </div>
        <div className="custom-regis-form-container">
          <h1>Register</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicUsername">
              <Form.Control
                className="custom-form-control" // Menetapkan kelas kustom di sini
                type="text"
                placeholder="Enter username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formBasicTelephone">
              <Form.Control
                className="custom-form-control" // Menetapkan kelas kustom di sini
                type="tel"
                placeholder="Enter telephone"
                name="telephone"
                value={formData.telephone}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Control
                className="custom-form-control" // Menetapkan kelas kustom di sini
                type="password"
                placeholder="Enter password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formBasicConfirmPassword">
              <Form.Control
                className="custom-form-control" // Menetapkan kelas kustom di sini
                type="password"
                placeholder="Confirm password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <div className="custom-button-container">
              <Button
                variant="primary"
                type="submit"
                className="custom-submit-button"
              >
                Login
              </Button>
            </div>

            <p className="register-text">
              Already have an account?{" "}
              <a href="/login" style={{ color: "blue" }}>
                Login here!
              </a>
            </p>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
