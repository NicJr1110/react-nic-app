import React from 'react'; // This is what makes the file aware it is a react file. So always needed
import Header from "./Header"; 
import Paragraph from "./week9/Paragraph"; //This allows us access to header. bit like  namespace
import Square from "./week9/Square";
import People from "./week9/People";
import Figure from "./week9/Figure";
import Basket from "./week9/Basket";
// import FadeIn from "./FadeIn";
import Clicked from "./week9/Clicked";
import ToggleText from "./ToggleText";
import Counter from "./week9/Counter";
import StepCounter from "./week9/StepCounter";
import CatchMeIfYouCan from"./week9/CatchMeIfYouCan";
import RollCall from"./week9/RollCall";
import Colours from"./week9/Colours";
import Die from"./week9/Die";
import Length from "./forms/Length";
import List from "./forms/List";
import Adder from "./forms/Adder";
import TempConverter from "./forms/TempConverter";
import Transform from "./forms/Transform";
// import SquareColor from "./state/SquareColor";
import Squares from "./state/Squares"


const Stuff = ({ square }) => (         
  <div className = "col-md-auto container-md" style = { {
    width: 600 
    } }>        
    <Header>Nic's React Project</Header>
    
    <Paragraph>Lorem ipsBum , Hehehehe!</Paragraph>
    
    {square ? <Square colour = 'papayawhip' /> : null }

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
    <Clicked />
    <ToggleText 
      initial="Hello World!"
      alt = "GoodBye Aliens!"
    />
    <Counter
      initial = { 50 }
      max = { 100 }
    />
    <StepCounter
      max = { 100 }
      step = { 5 }
    />
    <CatchMeIfYouCan
      jump = {100}
    />
    <RollCall
      names={ ["Chris", "Betty", "Kit", "Charlotte", "Kristin", "Jae", "Ellie", "Gareth", "Nic", "Mark", "Tom", "Ruth"] }
    />
    <Colours 
      colours = { [
        "#C14412",
        "#EBB31A",
        "#8F5318",
        "#009EAD",
        "#395967",
      ] }
    />
    <Die
      sides ={ 6 }
    />
    <Length 
      name = "Length Input Field"
    />
    <List 
      name = "Nic's list"
    />
    <Adder 
      name = "Adder "
    />
    <br/>
    <TempConverter
    />
    <Transform 
      name = "square"
      transform = { x => x * x }
    />
    <Squares 
      colour = "lightseagreen"
    />
    
  </div>
  
);

Stuff.defaultProps = {
  square : true
};

export default Stuff;