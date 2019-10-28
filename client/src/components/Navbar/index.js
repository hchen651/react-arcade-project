//React
import React from 'react';

//Stylesheet
import './style.css';

//Components
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

class NavBar extends React.Component {
    render () {
        return (
            <Navbar bg="light">
                <Navbar.Brand href="Browse">Rearcade</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Nav>
                        <NavDropdown title="User Name" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="User">User Profile</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#logout">Log Out</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default NavBar;