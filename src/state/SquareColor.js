  
import React from "react";

const SquareColor = ({ selected, handleClick, colour }) => (
    <div
        style={{
            width: 200,
            height: 200,
            background: selected ? colour : "green",
        }}
        onClick={ handleClick }
    />
);

export default SquareColor;