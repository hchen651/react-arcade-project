import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './style.css';

class NavBar extends React.Component {
    render () {
        return (
            <div>
                <Navbar bg="light">
                    <Navbar.Brand href="#home">Game Spot</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                        Signed in as: <a href="#login">PotatoGamer001</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                        <Nav className="mr-auto">

                        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                        </Nav>
                </Navbar>
            </div>
        );
    }
}

export default NavBar;