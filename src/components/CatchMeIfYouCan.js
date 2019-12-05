import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class CatchMeIfYouCan extends Component{
    constructor(props){
        super(props);
        this.state = {
            value: 200
        }

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        let { jump } = this.props
        this.setState({
            value : this.state.value + jump
        })
    }
    
    render() {
        let { value } = this.state;

        return (
    
            <div 
                className = "container"
                style={ { position:"relative"} }
            >
                <h4>Jumping Button</h4>
                <Button 
                    style= { {
                        position: "absolute",
                        top: 0,
                        left:  value
                    } }

                    onClick={ this.handleClick }

                >Catch Me!</Button>
            </div>
        );
    }
}

export default CatchMeIfYouCan