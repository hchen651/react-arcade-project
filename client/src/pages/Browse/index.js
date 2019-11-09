//React
import React from 'react';

//Components
import NavBar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Coverflow from 'react-coverflow';

class Browse extends React.Component {
    render () {
        return (
            <div>
                <NavBar />
                <Container>
                    <Row>
                        <Coverflow
                            displayQuantityOfSide={1}
                            navigation
                            infiniteScroll
                            enableHeading
                            media={{
                                '@media (max-width: 900px)': {
                                width: '600px',
                                height: '200px'
                                },
                                '@media (min-width: 900px)': {
                                width: '960px',
                                height: '400px'
                                }
                            }}
                        >
                            <img src="logo192.png" alt="game one" data-action="/game"/>
                            <img src="logo192.png" alt="game two" data-action="/browse"/>
                            <img src="logo192.png" alt="game three" data-action="/browse"/>
                            <img src="logo192.png" alt="game four" data-action="/browse"/>
                        </Coverflow>
                    </Row>
                </Container>
                <Footer />
            </div>
        )
    }
}

export default Browse;