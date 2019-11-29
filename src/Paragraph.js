import React from 'react';



const Paragraph = ({ children }) => (
    <p>{ children }</p>

);

//Defualting props
Paragraph.defaultProps = {
    children : "Hello World"
};

export default Paragraph;