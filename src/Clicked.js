import React, { Component } from 'react';

class Clicked extends Component {
    constructor(props) {
        super(props);

        this.state = {
            clickedText: "Not Clicked!"
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({
            clickedText: "Clicked!",
        });
    }
    
    render() {
        let { clickedText } = this.state
        return (
        
            <p className = "btn btn-primary" onClick={ this.handleClick }>{ clickedText }</p>
        )
    }
}

export default Clicked;