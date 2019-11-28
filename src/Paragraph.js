import React from 'react';



let Paragraph = ({ message }) => (
    <p>{ message }</p>

);

//Defualting props
Paragraph.defaultProps = {
    message : "Hello World"
};

export default Paragraph;