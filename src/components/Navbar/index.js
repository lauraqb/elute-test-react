import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Link } from "react-router-dom";

function MyNavbar() {

    return (
        <Navbar variant="light" bg="light" className="g-navbar">
            <Navbar.Brand>Elute Intelligence Frontend</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Item><Link to="/">JS Tests</Link></Nav.Item>
                <Nav.Item><Link to="/api-tests">API Tests</Link></Nav.Item>
                <Nav.Item><Link to="/">Puzzle</Link></Nav.Item>
            </Nav>
        </Navbar>
    )
    
}

export default MyNavbar