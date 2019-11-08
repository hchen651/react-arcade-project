//React
import React from 'react';

//Components
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Button from 'react-bootstrap/Button';
import { runInThisContext } from 'vm';

class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: 30,
            isOn: false,
        }

        this.handleClickStart.bind(this);
        this.handleClickReset.bind(this);
    }

    handleClickStart() {
        this.setState({
            isOn: !this.state.isOn,
        });
        
        this.timeInterval = setInterval(
            () => this.setState({time: this.state.time - 1}) , 1000
        );

        //pause timer when 'pause' is clicked

        //ends timer at 0
    }

    handleClickReset() {
        this.setState({
            isOn: false,
            time: 30,
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
                        {console.log(this.state.isOn)}
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