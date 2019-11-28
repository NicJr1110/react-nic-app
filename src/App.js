import React from 'react'; // This is what makes the file aware it is a react file. So always needed
import Header from "./Header";  //This allows us access to header. bit like  namespace
import Square from "./Square";

let App = () => (         //  the function has a capital as Babbel turns this into a Class later when turning the beneath into JS
  <React.Fragment>        
    <Header />      
    <Square />
  </React.Fragment>
);

export default App;
