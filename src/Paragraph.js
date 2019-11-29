import React, { Component } from 'react';


class Paragraph extends Component {
    
    constructor(props){
        super(props);
        
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        console.log("Hello, Aliens")
    }

    render() {
        let { children } = this.props 
        return (
            <p onClick={ this.handleClick }>
                { children }
            </p>
        );
    }

}

//Defualting props
Paragraph.defaultProps = {
    children : "Hello World"
};

export default Paragraph;