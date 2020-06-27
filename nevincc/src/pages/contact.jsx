import React, { Component } from "react";
import NavigationBar from "../NavigationBar";
import Form from "react-bootstrap/Form";

export class Contact extends Component {
  render() {
    return (
      <div>
        <NavigationBar />
        <Form className="m-2">
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Email" />
          </Form.Group>
        </Form>
      </div>
    );
  }
}

export default Contact;
