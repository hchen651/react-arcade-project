import React from 'react';
import NavBar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Container from 'react-bootstrap/Container';

class Browse extends React.Component {
    render () {
        return (
            <div>
                <NavBar />
                <Footer />
            </div>
        )
    }
}

export default Browse;