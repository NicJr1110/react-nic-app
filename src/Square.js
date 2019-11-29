import React, { Component } from 'react';



class Square extends Component {
    constructor(props) {
        super(props);

        this.state = {
            defaulted: false
        };

        this.handleClick = this.handleClick.bind(this);


    }

    handleClick() {
        this.setState({
           defaulted: !this.state.defaulted
        })
    }
 
    render(){
        let { defaulted } = this.state;
        let { colour }  = this.props;
        let defaultColour = "peru";
        return (
            <div 
                style={ { 
                background: defaulted ? colour : defaultColour,
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
    colour : "pink"
};

export default Square;