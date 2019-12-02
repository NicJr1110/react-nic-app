import React, { Component } from 'react';

class Colours extends Component{
    constructor(props){
        super(props);
        
        this.state = {
            index: 0
        };

        this.handleClick = this.handleClick.bind(this);
    }


    handleClick(){
        let { index } = this.state
        let colours = this.props.colours
        let num = (colours.length) - 1
        this.setState({
           index: index < num ? this.state.index + 1 : 0
        })
    }

    render() {
       let { index } = this.state;
        return (
            <>
                <h4> Rainbow Square</h4>
                <div 
                    style={ { 
                    background: this.props.colours[index],
                    height: 200,
                    width: 200
                    } }
                    className='m-auto'
                    onClick={ this.handleClick }
                />
            </>
        );
    }
}

export default Colours

