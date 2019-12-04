import React, { Component } from "react";
import SquareColor from "./SquareColor";

class Squares extends Component {
    constructor(props) {
        super(props);
        this.state = { selected: 1 };
    }

    render() {
        return (
            <React.Fragment>
                <SquareColor
                    selected={ this.state.selected === 1 }
                    handleClick={ () => this.setState({ selected: 1 }) }
                    colour={ this.props.colour }
                />
                <SquareColor
                    selected={ this.state.selected === 2 }
                    handleClick={ () => this.setState({ selected: 2 }) }
                    colour={ this.props.colour }
                />
            </React.Fragment>
        );
    }
}

export default Squares;