import React, { Component } from 'react';

class TempConverter extends Component {
    constructor(props){
        super(props);

        this.state = {
            fahrenheit : 32,
            celsius: 0
        };

        this.handleChangeCelsius = this.handleChangeCelsius.bind(this);
        this.handleChangeFahrenheit = this.handleChangeFahrenheit.bind(this);
    }

    handleChangeFahrenheit(e) {
        let inputVal = e.currentTarget.value;
        this.setState({ 
            fahrenheit: inputVal,
            celsius: (+inputVal - 32) * (5/9)
        }); 
    }

    handleChangeCelsius(e) {
        let inputVal = e.currentTarget.value;
        this.setState({ 
            fahrenheit: (inputVal * (9/5)) + 32,
            celsius: inputVal
        }); 
    }

    render(){
        let { fahrenheit, celsius } = this.state;
        return(
            <div>
                <label>Fahrenheit</label>
                <input 
                    value = { fahrenheit }
                    onChange = { this.handleChangeFahrenheit }
                    type = "number"
                ></input>
                <br/>
                <label>Celsius</label>
                <input
                    value = { celsius }
                    onChange = { this.handleChangeCelsius }
                    type = "number"
                ></input>
            </div>
        );
    }
}

export default TempConverter