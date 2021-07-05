import React from "react";
import { Form, Button, Card } from "react-bootstrap";

export default function Login() {
  return (
    <div>
      <Card
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <Card.Header>Login</Card.Header>
        <Card.Body>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formMinecraftUsername">
              <Form.Label>Minecraft Username</Form.Label>
              <Form.Control type="text" placeholder="Enter Minecraft User" />
              <Form.Text className="text-muted">
                Used to generate your profile on Hypixel.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox"></Form.Group>
            <br />
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Card.Body>
        <Card.Footer>Hypixel Auction House</Card.Footer>
      </Card>
    </div>
  );
}
