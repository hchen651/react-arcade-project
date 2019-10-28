//React
import React from 'react';

//Components
import NavBar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Browse extends React.Component {
    render () {
        return (
            <div>
                <NavBar />
                <Container>
                    User
                </Container>
                <Footer />
            </div>
        )
    }
}

export default Browse;