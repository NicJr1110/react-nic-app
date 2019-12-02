import React, { Component } from 'react';

class Die extends Component{
    constructor(props){
        super(props);
        this.state = {
            number : 1
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        let { sides } = this.props;
        let random = Math.random();
        this.setState({
            number: Math.floor(random * sides + 1)
        })
    }

    render(){
        let { number } = this.state;
        return (
            <p style={ {
                background: 'seaGreen',
                color: 'white',
                padding: 50,
                width:115
                } }

                onClick = { this.handleClick }

            >{ number }</p>
        );
    }
} 

export default Die