import React from 'react';
import { Navbar, Nav, Form, FormControl, Button, NavDropdown } from "react-bootstrap";
import { useHistory } from 'react-router-dom';

export const Navi = () => {
  const history=useHistory()
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
          <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>

          <Nav.Link href="#deets">
          <Button variant="light" onClick={()=>history.push("/signup")}>Sign up</Button>
          </Nav.Link>
          <Nav.Link eventKey={2}>
          <Button variant="info" onClick={()=>history.push("/signin")} >Login</Button>
          </Nav.Link>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="info">Search</Button>
          </Form>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

