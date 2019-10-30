import React, { Component } from 'react';

class Game01 extends Component {
    state = {
        x: 255,
        y: 325,
        text: "Click to Start"
    }
    draw = () => {
        const ctx = this.refs.canvas.getContext("2d");
        ctx.clearRect(0, 0, 650, 650);
        ctx.font = "30px Arial";
        ctx.fillText(this.state.text, this.state.x, this.state.y)
    }

    handleKeyPress = (event) => {
        console.log("keypress");
        if (event.key == this.state.text) {
            let newtext = String.fromCharCode(97 + Math.floor(Math.random() * 26));
            console.log(newtext)
            this.setState({ text: newtext });
            this.setState({ x: Math.floor(Math.random() * Math.floor(650)) })
            this.setState({ y: Math.floor(Math.random() * Math.floor(650)) });
            this.draw();
            console.log(this.state.text);
        }
    }

    gameStart = () => {
        let newtext = String.fromCharCode(97 + Math.floor(Math.random() * 26));
        this.setState({ text: newtext });
        this.setState({ x: Math.floor(Math.random() * Math.floor(650)) });
        this.setState({ y: Math.floor(Math.random() * Math.floor(650)) });
        this.draw();
    }


    componentDidMount() {
        this.draw()
    }
    render() {
        return (
            <div>
                <canvas ref="canvas" width={650} height={650}
                    tabIndex="0"
                    onKeyPress={this.handleKeyPress}
                    onClick={this.gameStart}
                />
            </div>
        );
    }


    //howto:
    //set state object random 0-25. 
    //set text state. 
    //randomize location x and y on canvas. 
    //
}
export default Game01;