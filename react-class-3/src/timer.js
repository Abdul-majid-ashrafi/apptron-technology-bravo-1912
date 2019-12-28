import React from 'react';

class Timer extends React.Component {
    constructor() {
        super();
        this.state = {
            seconds: 0
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.tick();
        }, 1000);
    }

    tick() {
        this.setState({
            seconds: this.state.seconds + 1
        })
    }

    render() {
        return <b className="fgblack">{this.state.seconds}</b>
    }
}

export default Timer;