import React, { Component } from 'react';



class Square extends Component {
    constructor(props) {
        super(props);

        this.state = {
            colour: 'papayawhip'
        };

        this.handleClick = this.handleClick.bind(this);


    }

    handleClick() {
        if(this.state.colour === 'papayawhip'){
            this.setState({
                colour : 'peru'
            });
        } else {
            this.setState({
                colour : 'papayawhip'
            });
        };
    }
 
    render(){
        let { colour } = this.state;
        return (
            <div 
                style={ { 
                background: colour,
                height: 200,
                width: 200
                } }
                className='m-auto'
                onClick={ this.handleClick }
            />
        );
    }
}



//Defaulting props
Square.defaultProps = {
    colour : "blue"
};

export default Square;