//React
import React from 'react';

//react-bootstrap Components
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button'

class Home extends React.Component {
    render() {
        return (
            <div>
                <Jumbotron style={{ 'margin-top': '12em', 'text-align': 'center' }}>
                    <h1>REACADE.</h1>
                    <h3>
                        reaction games done in react.
                    </h3>
                    <p>
                        test your reflexes. 
                        <br></br>
                        save your scores.
                        <br></br>
                        compare with others.
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