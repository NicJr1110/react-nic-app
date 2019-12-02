import React, { Component } from 'react';

class RollCall extends Component{
    constructor(props){
        super(props);
        
        this.state = {
            index: 0
        };

        this.handleClick = this.handleClick.bind(this);
    }


    handleClick(){
        let { index } = this.state
        let names = this.props.names
        let num = (names.length) - 1
        this.setState({
           index: index < num ? this.state.index + 1 : 0
        })
    }

    render() {
       let { index } = this.state;
        return (
            <>
                <h4>RollCall</h4>
                <p>{ this.props.names[index] }</p>
                <button
                    onClick={ this.handleClick }
                >Next</button>
            </>
        );
    }
}

export default RollCall




