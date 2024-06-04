import React from "react";
import NavbarComponents from "../../commponent/NavbarAfterLogin/Navbar2";
import { Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const PaymentConfirm = () => {
  return (
    <main>
      <NavbarComponents />

      <Container>
        <h2 className="text-center mt-5" style={{ color: "#4F4CEE" }}>
          Payment Confirmation
        </h2>

        <h5 className="mt-4">Send Proof of Your Payment Here</h5>

        <Form className="mt-4 p-5 rounded-2">
          <Form.Group controlId="formBasicName">
            <Form.Label>Account Name</Form.Label>
            <Form.Control
              style={{ border: "2px solid #4F4CEE", borderRadius: "5px" }}
              type="text"
              placeholder="Enter account name"
            />
          </Form.Group>

          <Form.Group controlId="formBasicBank">
            <Form.Label>Bank</Form.Label>
            <Form.Control
              style={{ border: "2px solid #4F4CEE", borderRadius: "5px" }}
              type="text"
              placeholder="Enter bank name"
            />
          </Form.Group>

          <Form.Group controlId="formBasicAmount">
            <Form.Label>Payment Amount</Form.Label>
            <Form.Control
              style={{ border: "2px solid #4F4CEE", borderRadius: "5px" }}
              type="number"
              placeholder="Enter payment amount"
            />
          </Form.Group>

          <Form.Group controlId="formBasicFile">
            <Form.Label>Proof of Payment</Form.Label>
            <Form.Control type="file" />
          </Form.Group>

          <Link
            to="/paymentsuccess"
            className="btn btn-primary d-block w-100 mt-4"
            type="submit"
          >
            Send
          </Link>
        </Form>
      </Container>
    </main>
  );
};

export default PaymentConfirm;
