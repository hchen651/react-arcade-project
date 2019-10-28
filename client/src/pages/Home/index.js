//React
import React from 'react';

//Components
import NavBar from '../../components/Navbar';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button'

class Home extends React.Component {
    render() {
        return (
            <div>
                <Jumbotron style={{ 'margin-top': '20%', 'text-align': 'center' }}>
                    <h1>REACADE.</h1>
                    <p>
                        it's like miniclip but in React
                    </p>
                    <p>
                        <Button variant="primary">Log In</Button>
                    </p>
                    <p>
                        <Button variant="info">Sign Up</Button>
                    </p>
                    <p>
                        <Button variant="secondary" href="/browse">Try it Out!</Button>
                    </p>
                </Jumbotron>
            </div>
        )
    }
}

export default Home;