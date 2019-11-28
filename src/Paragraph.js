import React from 'react';



let Paragraph = ({ children }) => (
    <p>{ children }</p>

);

//Defualting props
Paragraph.defaultProps = {
    children : "Hello World"
};

export default Paragraph;