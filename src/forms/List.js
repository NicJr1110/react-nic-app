import React, { Component } from 'react';

class List extends Component{
    constructor(props){
        super(props);

        this.state = {
            input : "",
            listItems: []
        };
        
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

   handleChange(e){
       this.setState({ input: e.currentTarget.value })
   }

    handleClick() {
        let { listItems,input } = this.state;
        let arr1 = [...listItems, input];
        
        this.setState({ 
            listItems: arr1
        })
    }


    render() {
        let { listItems } =this.state;
        let { name } = this.props;
        return (
            <>
                <h4>Item List</h4> 
                <ul>
                    { listItems.map((value, index) => (
                        <li key = { index }> { value } </li>
                    ))}
                </ul>
                <div className = "form-group">
                    <label> { name } </label>
                    <input 
                        onChange = { this.handleChange }
                        // value = { input }
                        name = { name }
                        className = 'form-control'
                    > 
                    </input>
                    <button
                        className = "btn btn-primary"
                        onClick = { this.handleClick }
                    >Add item</button>
                </div>
            </>
        );
    }

}

export default List