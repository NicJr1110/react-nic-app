import React from 'react'; // This is what makes the file aware it is a react file. So always needed
import Header from "./Header"; 
import Paragraph from "./Paragraph"; //This allows us access to header. bit like  namespace
import Square from "./Square";
import People from "./People";

let Stuff = () => (         
  <React.Fragment>        
    <Header />    
    <Paragraph />  
    <Square />
    <People />
  </React.Fragment>
);

export default Stuff;