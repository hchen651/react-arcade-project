//React
import React from 'react';

//Components
import Game01 from '../../games/Game01'

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
                <Container style={{'margin-top': '2em',backgroundColor: 'grey'}}>
                    <Game01></Game01>
                </Container>
                <Footer />
            </div>
        )
    }
}

export default Browse;