import React from 'react'; // This is what makes the file aware it is a react file. So always needed
import Header from "./Header"; 
import Paragraph from "./Paragraph"; //This allows us access to header. bit like  namespace
import Square from "./Square";
import People from "./People";
import Figure from "./Figure";
import Basket from "./Basket";
// import FadeIn from "./FadeIn";

const Stuff = ({ square }) => (         
  <React.Fragment>        
    <Header>Nic's React Project</Header>
    
    <Paragraph>Lorem ipsum, smelly smelly bum</Paragraph>
    
    {square ? <Square 
      colour = 'green'  
    /> : null }
    <People 
      names = { ["James P. Sullivan", "Mike Wazowski", "Boo", "Randall Boggs", "Roz", "Fungus"] }
    />
    <Figure 
      src = "http://78.media.tumblr.com/ea3884f17979500c2406fd4d21891195/tumblr_mr4humiiCH1r4xjo2o1_500.gif"
      caption = "Gigantamax Meowth"
    />
    <Figure
      caption = "Wiggle Wiggle B***h"
    />
    <Basket
      items = { [{ name: "Coffee", price: 2.10 },
      { name: "Bananas", price: 3.50 },
      { name: "Milk", price: 250.65 },
      { name: "The Great Milk Shortage by Simon Schama", price: 12.99 }] }
    />
    {/* <FadeIn time="500ms">Hello</FadeIn> */}
  </React.Fragment>
);

export default Stuff;