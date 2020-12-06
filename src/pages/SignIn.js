import React, { useState } from 'react'
import firebase from "../Firebase/fbconfig"
import { Navbar, Nav, Form, FormControl, Button, NavDropdown, Container, Col } from "react-bootstrap";
export const SignIn = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    const handleSubmit = (e) => {
        e.preventDefault()
        firebase.signIn(email, password)
    }
    return (
        <Container style={{ height: "50vh", placeItems: "center", display: "grid" }}>
            <Col md={{ span: 6, offset: 0 }}>
                <Form >
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Col>
        </Container>
    )
}
