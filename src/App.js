import React from 'react'; // This is what makes the file aware it is a react file. So always needed
import Stuff from "./Stuff";
  //This allows us access to header. bit like  namespace


const App = () => (         //  the function has a capital as Babbel turns this into a Class later when turning the beneath into JS
  <Stuff 
    square = { true }  
  />
);

export default App;
