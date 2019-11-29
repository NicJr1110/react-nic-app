import React, { Component } from 'react';




class Header extends Component {

    constructor(props){
        super(props);

        this.state = {
            counter: 0,
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({
            counter: this.state.counter + 1,
        });
    }

    render() {
        let { children } = this.props;
        let { counter } = this.state;

        return (
            <div className="jumbotron" onClick={ this.handleClick }>
                <h1>{ children }</h1>
                <p>Counter: { counter }</p>
            </div>
        );
    }
} 








export default Header;