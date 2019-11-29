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
    
    <Paragraph>Lorem ipsBum , Hehehehe!</Paragraph>
    
    {square ? <Square colour = 'papayawhip'/> : null }

    <People 
      names = { ["James P. Sullivan", "Mike Wazowski", "Boo", "Randall Boggs", "Roz", "Fungus"] }
    />
    <Figure 
      src = "https://66.media.tumblr.com/bf7d3ef19576e853a8e980fdb758d14d/tumblr_moc5ybStEV1r4xjo2o1_250.gifv"
      caption = "Dude! Where's my CatNip"
    />
    <Figure
      src = "https://66.media.tumblr.com/d567f1e7cfc797cc3b233935be37d6b0/tumblr_mh1kjs2aQH1r4xjo2o1_250.gifv"
      caption = "F**k"
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

Stuff.defaultProps = {
  square : true
};

export default Stuff;