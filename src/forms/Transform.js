import React, { Component } from 'react';

class Transform extends Component {
    constructor(props){
        super(props);

        this.state ={
            output: "0"
        }

        this.handleChange=this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({
            output : e.currentTarget.value
        })
    }
 
    render() {
        let { name } = this.props;
        let { output } = this.state;
        let { transform } = this.props;
        return(
            <>
                <h4> Transform : { name }</h4>
                <input 
                    type= "number"
                    onChange = { this.handleChange }
                    value = { output }
                ></input>
                <p>Answer :{ transform(output) }</p>
            </>
        )
    }

}

export default Transform