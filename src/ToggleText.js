import React, { Component } from 'react';

class ToggleText extends Component {
    constructor(props) {
        super(props);

        this.state = {
            initialText: true
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({
            initialText: !this.state.initialText,
        });
    }

    render() {
        let { initialText } = this.state;
        let { initial } = this.props;
        let { alt } = this.props;
        return (
        <div className ='card'>
            <p>{ initialText ? initial : alt }</p>
            <button 
                className="btn btn-secondary"
                onClick={ this.handleClick }
            
            >Click Me!</button>
        </div>
        );
    }
}

ToggleText.defaultProps = {
    initial : "Go add some inital text",
    alt: "Go add some alt text"
};


export default ToggleText;