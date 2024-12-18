import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '@fortawesome/fontawesome-free/css/all.min.css';

function BasicExample() {
    return (
        <Navbar expand="lg" style={{backgroundColor:'#FEF7F0'}}>
            <Container>
                <Navbar.Brand style={{ marginRight: "300px", marginLeft: "-90px" }} href="#home">logo</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link style={{ marginRight: "60px" }} href="#home">Home</Nav.Link>
                        <Nav.Link style={{ marginRight: "60px" }} href="#link">Schedule</Nav.Link>
                        <Nav.Link style={{ marginRight: "60px" }} href="#link">Salary</Nav.Link>
                    </Nav>
                    <Nav className="ms-auto">
                        <Nav.Link style={{ marginRight: "20px" }} href="#search"><i className="fas fa-search"></i></Nav.Link>
                        <NavDropdown title={<i className="fas fa-user"></i>} id="profile-nav-dropdown">
                            <NavDropdown.Item style={{backgroundColor:'#C3689F'}}href="#">History</NavDropdown.Item>
                            <NavDropdown.Item style={{backgroundColor:'#C3689F'}}href="#">Leaves</NavDropdown.Item>
                            <NavDropdown.Item style={{backgroundColor:'#C3689F'}}href="#">Logout</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default BasicExample;
