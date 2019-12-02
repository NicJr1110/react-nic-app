import React, { Component } from 'react';

class Length extends Component {
    constructor(props){
        super(props);

        this.state = {
            value : ""
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({ value: e.currentTarget.value })
    }
 
    render() {
        let { value } = this.state;
        let { name } = this.props;
        return (
            <div className = "form-group">
                <label>{ name }</label>
                <input 
                    onChange = { this.handleChange }
                    value = { value }
                    name = { name }
                    className = 'form-control'
                > 
                </input>
                <p className = "help-block">
                    Length: { value.length }
                </p>
            </div>
        );
    }
}

export default Length