import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './style.css';

class Footer extends React.Component {
    render () {
        return (
            <footer>
                <Container>
                    <span id="footer">some footer text</span>
                </Container>
            </footer>
        );
    }
}
    
export default Footer;