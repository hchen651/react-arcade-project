//React
import React from 'react';

//react-bootstrap Components
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'

class Home extends React.Component {

    state = {
        loginShow: false,
        registerShow: false
    };

    handleLoginShow = () => {
        this.setState({ loginShow: true });
    };
    handleLoginClose = () => {
        this.setState({ loginShow: false });
    };
    handleRegisterShow = () => {
        this.setState({ registerShow: true });
    };
    handleRegisterClose = () => {
        this.setState({ registerShow: false });
    };

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
                        <Button variant="primary" onClick={this.handleLoginShow}>Log In</Button>
                        <Modal show={this.state.loginShow} onHide={this.handleLoginClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>Log In</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control type="text" placeholder="Username" />
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>

                                <Form.Group controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="Remember Me" />
                                </Form.Group>

                                <Button variant="primary" type="submit">Log In</Button>
                            </Modal.Body>
                        </Modal>
                    </p>

                    <p>
                        <Button variant="info" onClick={this.handleRegisterShow}>Sign Up</Button>
                        <Modal show={this.state.registerShow} onHide={this.handleRegisterClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>Register</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Form>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Username</Form.Label>
                                        <Form.Control type="text" placeholder="Pick a Unique Username" />
                                    </Form.Group>

                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" placeholder="Set a Secure Password" />
                                    </Form.Group>

                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Label>Confirm Password</Form.Label>
                                        <Form.Control type="password" placeholder="Confirm Your Password" />
                                    </Form.Group>

                                    <Form.Row>
                                        {['radio'].map(type => (
                                            <div key={`custom-inline-${type}`} className="mb-3">
                                                <Form.Check
                                                    custom
                                                    inline
                                                    label="1"
                                                    type={type}
                                                    id={`custom-inline-${type}-1`}
                                                />
                                                <Form.Check
                                                    custom
                                                    inline
                                                    label="2"
                                                    type={type}
                                                    id={`custom-inline-${type}-2`}
                                                />
                                            </div>
                                        ))}
                                    </Form.Row>

                                    <Button variant="primary" type="submit">Log In</Button>
                                </Form>
                            </Modal.Body>
                        </Modal>
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