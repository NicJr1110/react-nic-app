import React from 'react'; // This is what makes the file aware it is a react file. So always needed
import Header from "./Header"; 
import Paragraph from "./Paragraph"; //This allows us access to header. bit like  namespace
import Square from "./Square";
import People from "./People";
import Figure from "./Figure";

let Stuff = () => (         
  <React.Fragment>        
    <Header
      text = "Nic's React App"
    />    
    <Paragraph 
      message = "Lorem ipsum, smelly smelly bum bum "  
    />  
    <Square 
      colour = 'green'  
    />
    <People 
      names = { ["James P. Sullivan", "Mike Wazowski", "Boo", "Randall Boggs", "Roz", "Fungus"] }
    />
    <Figure 
      src = "http://78.media.tumblr.com/ea3884f17979500c2406fd4d21891195/tumblr_mr4humiiCH1r4xjo2o1_500.gif"
      caption = "Gigantamax Meowth"
    />
    <Figure
      caption = "Wiggle Wiggle Bitch"
    />
  </React.Fragment>
);

export default Stuff;