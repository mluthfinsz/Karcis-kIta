import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import Navbar from "../../commponent/Navbar/Navbar";
import "./login.css"; // Import CSS file
import loginImage from "../../assets/image/karciskitalogo.jpg"; // Import gambar login

const LoginForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
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
    // Redirect ke halaman setelah login
    window.location.href = "/afterlogin";
  };

  return (
    <div>
      <Navbar /> {/* Tambahkan Navbar di sini */}
      <div className="container">
        <div className="image-container-logo">
          <img src={loginImage} alt="Login" className="login-image" />
        </div>
        <div className="custom-form-container">
          <h1>Login</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicUsername">
              <Form.Control
                type="text"
                placeholder="Enter username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Control
                type="password"
                placeholder="Enter password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <div className="button-container">
              <Button variant="primary" type="submit" className="submit-button">
                Login
              </Button>
            </div>

            {/* Tambahkan link ke halaman afterlogin */}
            <p className="signup-text">
              Don't have an account?{" "}
              <a href="/signup" style={{ color: "blue" }}>
                Sign Up Here!
              </a>
            </p>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
