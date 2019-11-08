//React
import React from 'react';

//Components
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Button from 'react-bootstrap/Button';

class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: 5,
            isOn: false,
        }

        this.handleClickStart.bind(this);
        this.handleClickReset.bind(this);
    }

    handleClickStart() {
        this.setState({
            time: 5,
            isOn: !this.state.isOn,
        });
        
        this.timeInterval = setInterval(
            () => this.tick() , 1000
        );
    }

    //
    tick() {
        this.setState({
            time: this.state.time - 1
        });

        if (this.state.time == 0) {
            this.setState({
                isOn: false,
            });
            clearInterval(this.timeInterval);
            console.log("time's up");
            console.log(this.state.isOn);
        }
    }

    //pause timer when 'pause' is clicked?

    handleClickReset() {
        this.setState({
            isOn: false,
            time: 5,
        });

        clearInterval(this.timeInterval);
    }

    render() {
        return (
            <div>
                <ButtonToolbar>
                    <h3>Time: {this.state.time}</h3>
                    <Button variant="primary" onClick={()=> this.handleClickStart()} > 
                        {this.state.isOn ? 'Pause' : 'Start'} 
                    </Button>
                    <Button variant="secondary" onClick={()=> this.handleClickReset()}>
                        Reset
                    </Button>
                </ButtonToolbar>
            </div>
        )
    }

}

export default Timer;