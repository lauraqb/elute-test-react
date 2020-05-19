import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { NavLink } from "react-router-dom";

function MyNavbar() {

    return (
        <Navbar variant="dark" bg="dark">
            <Navbar.Brand>Elute Intelligence Frontend Test</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link as={NavLink} exact to="/">JS Tests</Nav.Link>
                <Nav.Link as={NavLink} exact to="/api-tests"> API Tests</Nav.Link>
                <Nav.Link as={NavLink} exact to="/puzzle">Puzzle</Nav.Link>
            </Nav>
        </Navbar>
    )
}

export default MyNavbar