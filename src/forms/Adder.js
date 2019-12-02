import React, { Component } from 'react';

class Adder extends Component{
    constructor(props){
        super(props);

        this.state ={
            input: '0',
            numbers: [],
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
        let { total,input,numbers } = this.state;
        let arr1 = [...numbers, input]
        this.setState({
            total: +total + +input,
            numbers : arr1
        })

    }
    render() {
        let { total,numbers } = this.state;
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
                <ul>
                    { numbers.map((value, index) => (
                        <li key={ index }> { value }</li>
                    ))}
                </ul>
                <p>{ total } </p>
            </div>
        );
}
}

export default Adder