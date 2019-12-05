import React, { Component } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar'
import { Button } from 'react-bootstrap';

class Progress extends Component {
    constructor(props){
        super(props)

        this.state = {
            value: "0"
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        let { value } = this.state;

        this.setState({
            value: +value === 100 ? 100 : +value + 10
        })

    }


    render() {
        let { value } = this.state;
        return(
            <div className = "container">
                <ProgressBar >
                    <ProgressBar striped variant="success" now={ +value } label= { `${value}%` }  animated={true} />
                </ProgressBar>
                <br/>
                <Button variant = { value === 100 ? "disabled" : "primary" }
                    onClick = { this.handleClick }
                >Increase 10%</Button>
                
            </div>
        )
    }s
}

export default Progress;