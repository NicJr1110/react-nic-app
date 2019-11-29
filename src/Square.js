import React from 'react';

const Square = ({ colour }) => (
    <div 
        style={ { 
        background: colour,
        height: 200,
        width: 200
        } }
        className='m-auto'
    />
);


//Defaulting props
Square.defaultProps = {
    colour : "blue"
};

export default Square;