import React, { Component } from 'react';
import Form from 'react-bootstrap/Form'


class PasswordStrength extends Component {
    constructor(props){
        super(props)

        this.state = {
            value: "",
        
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {

        this.setState({
            value: e.currentTarget.value
        })

    }

    calcColour(length) { 
        if ( length < 9 ){
            return "red"
        } else if(length < 16) {
            return "orange"
        } else {
            return "green"
        }
    } 

    calcBackground(){
        let length = this.state.value.length;

        return length === 0 ? {} : {
            background: this.calcColour(length),
        }
    }

   


    render() {
        let { value } = this.state;
        let output = this.calcBackground();
        return(
        
            <Form.Group controlId="formPassword" className = "container">
                <Form.Label>Password</Form.Label>
                <Form.Control 
                    style = { output }
                    type="password" 
                    placeholder="Enter password"
                    value = { value }
                    onChange = { this.handleChange } />
            </Form.Group>
        
        )
    }
}

export default PasswordStrength;