import React, { Component } from 'react';

class StepCounter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0
        };
        this.min = 0

        this.handleAddStep = this.handleAddStep.bind(this);
        this.handleMinusStep = this.handleMinusStep.bind(this);
        
    }

    handleAddStep() {
        let { max, step } =  this.props
        let sum = this.state.value + step;
        this.setState({
            value: sum >= max ? max : sum
        })
    }

    handleMinusStep() {
        let min = this.min;
        let { step } = this.props;
        let sum = this.state.value - step;
        this.setState({
            value: sum <= min ? min : sum
        })
    }


    render() {
        let { value } = this.state

        return (
        <>
            <br/>
            <h4> StepCounter</h4>
            <p>{ value }</p>
            <button className="btn btn-primary" onClick={ this.handleAddStep }>+</button>
            <button className="btn btn-primary" onClick={ this.handleMinusStep }>-</button>
        </>
        );
    }
}

export default StepCounter;