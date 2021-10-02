import React, { useRef, useState } from "react";
import { Link } from 'react-router-dom';

//comppnents
import { useAuth } from "../contexts/AuthContext";

//styles
import { Container, Form, Button, Alert } from "react-bootstrap";

export default function ForgotPassword() {
  const emailRef = useRef();
  const { resetPassword } = useAuth();
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setMessage('')
      setError('')
      setLoading(true);
      await resetPassword(emailRef.current.value)
      setMessage('Check your inbox for further instructions.')
    } catch {
      setError("Failed to reset password");
    }

    setLoading(false);
  }

  return (
    <>
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <h2 className="text-center mb-4">Password Reset</h2>

          {error && <Alert variant="danger">{error}</Alert>}
          {message && <Alert variant="success">{message}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
      
            <Button
              disabled={loading}
              style={{ marginTop: "1rem" }}
              className="w-100"
              type="submit"
            >
              Reset Password
            </Button>
          </Form>

          <div className="w-100 text-center mt-3">
            <Link to='/login'>Login</Link>
          </div>

          <div className="w-100 text-center mt-2">
            Need an account? <Link to='/signup'>Sign Up</Link>
          </div>
        </div>
      </Container>
    </>
  );
}
