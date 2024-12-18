import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '@fortawesome/fontawesome-free/css/all.min.css';

function BasicExample() {
    return (
        <Navbar expand="lg" style={{backgroundColor:'#FEF7F0'}}>
            <Container style={{backgroundColor:'#FEF7F0'}}>
                <Navbar.Brand style={{ marginRight: "300px", marginLeft: "-90px" }} href="#home">logo</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link style={{ marginRight: "60px" }} href="#home">Customer</Nav.Link>
                        <Nav.Link style={{ marginRight: "60px" }} href="#link">Saloon</Nav.Link>
                        <NavDropdown style={{ marginRight: "580px" }} title="Employee" id="basic-nav-dropdown">
                            <NavDropdown.Item style={{ backgroundColor: "#C3689F" }} href="#action/3.1">Delivery Agents</NavDropdown.Item>
                            <NavDropdown.Item style={{ backgroundColor: "#C3689F" }} href="#action/3.2">Beautians</NavDropdown.Item>
                            <NavDropdown.Item style={{ backgroundColor: "#C3689F" }} href="#action/3.3">Cashier</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav className="ms-auto">
                        <Nav.Link style={{ marginRight: "20px" }} href="#search"><i className="fas fa-search"></i></Nav.Link>
                        <Nav.Link style={{ marginRight: "20px" }} href="#notifications"><i className="fas fa-bell"></i></Nav.Link>
                        <NavDropdown title={<i className="fas fa-user"></i>} id="profile-nav-dropdown">
                            <NavDropdown.Item style={{ backgroundColor: "#C3689F" }} href="#profile">Profile</NavDropdown.Item>
                            <NavDropdown.Item style={{ backgroundColor: "#C3689F" }} href="#settings">Settings</NavDropdown.Item>
                            <NavDropdown.Item style={{ backgroundColor: "#C3689F" }} href="#logout">Logout</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default BasicExample;
