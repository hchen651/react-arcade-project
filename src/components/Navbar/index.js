import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import './style.css';

class NavBar extends React.Component {
    render () {
        return (
            <div>
                <Navbar bg="light">
                    <Navbar.Brand href="#home">Brand link</Navbar.Brand>
                </Navbar>
            </div>
        );
    }
}

export default NavBar;