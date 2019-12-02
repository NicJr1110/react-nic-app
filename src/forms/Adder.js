import React, { Component } from 'react';

class Adder extends Component{
    constructor(props){
        super(props);

        this.state ={
            input: 0,
            total: 0
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(e) {
        this.setState({ 
            input: e.currentTarget.value
        })
    }

    handleClick() {
        let { total,input} = this.state;
        this.setState({
            total: parseInt(total) + parseInt(input)
        })

    }
    render() {
        let { total } = this.state;
        let { name } = this.props;
        return(
            <div className = "form-group">
                <label>{ name }</label>
                <input 
                    onChange = { this.handleChange }
                    name = { name }
                    className = 'form-control'
                    type = "number"
                > 
                </input>
                <button
                    onClick = { this.handleClick }
                >Add</button>
                <p>{ total } </p>
            </div>
        );
}
}

export default Adder