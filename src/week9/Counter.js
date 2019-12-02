import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.initial
        };
        this.handleAdd = this.handleAdd.bind(this);
        this.handleMinus = this.handleMinus.bind(this);
    }

    handleAdd() {
        let max =  this.props.max;
        let sum = this.state.value + 1;
        this.setState({
            value: sum >= max ? max : sum
        })
    }

    handleMinus() {
        let min = this.props.initial;
        let sum = this.state.value - 1;
        this.setState({
            value: sum <= min ? min : sum
        })
    }


    render() {
        let { value } = this.state

        return (
        <>
            <br/>
            <h4> Counter</h4>
            <p>{ value }</p>
            <button className="btn btn-primary" onClick={ this.handleAdd}>+</button>
            <button className="btn btn-primary" onClick={ this.handleMinus}>-</button>
        </>
        );
    }
}

export default Counter;