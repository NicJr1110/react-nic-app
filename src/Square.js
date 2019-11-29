import React from 'react';

// const boxSize = {
//     background: 'red',
//     height: 200,
//     width: 200
// }

const Square = ( {colour} ) => (
    <div style={ { 
        background: colour,
        height: 200,
        width: 200
        
    } } >
    </div> 
);


//Defualting props
Square.defaultProps = {
    colour : "blue"
};

export default Square;