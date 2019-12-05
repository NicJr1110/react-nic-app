import React from 'react'; // This is what makes the file aware it is a react file. So always needed

import {
    BrowserRouter as Router,
    Route,
    Switch,
} from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import TempConverter from "./forms/TempConverter";
import Clicked from "./week9/Clicked";
import Colours from "./week9/Colours";
import RollCall from "./week9/RollCall";
import FourOhFour from "./FourOhFour";
import Square from "./week9/Square";
import StepCounter from "./week9/StepCounter";
import Components from "./Components";

import CatchMeIfYouCan from "./components/CatchMeIfYouCan";
import Progress from "./components/Progress";
import PasswordStrength from "./components/PasswordStrength";






const App = () => (         //  the function has a capital as Babbel turns this into a Class later when turning the beneath into JS
  <Router>
    <div className = "container">
      <Header>Nic's React Project</Header>
      <Switch>
        <Route exact path = "/" >
          
        </Route>
        <Route exact path = "/tempconverter">
          <TempConverter />
          
        </Route>
        <Route exact path = "/buttons" >
          <Clicked />
          
        </Route>
        <Route exact path = "/squares" render={ () => (
            <>
              <Colours 
              colours = { [
                "#C14412",
                "#EBB31A",
                "#8F5318",
                "#009EAD",
                "#395967",
              ] }
              />
              
            </>

          )} 
        >
        </Route>
        <Route exact path = "/rollcall" render={ () => (
          <>
            <RollCall
            names={ ["Chris", "Betty", "Kit", "Charlotte", "Kristin", "Jae", "Ellie", "Gareth", "Nic", "Mark", "Tom", "Ruth"] }
            />
            
          </>
        ) }
        >
          
        </Route>
        <Route exact path = "/squares/:colour" render={ ( { match } ) => (
          <Square colour = { match.params.colour }  /> 
        ) }>
          
        </Route> 
        <Route exact path = "/steps/:max/:step" render={ ( { match } ) => (
          <StepCounter max={ +match.params.max } step={ +match.params.step } />
        ) } >
          
        </Route>
        <Route exact path = "/components"  component = { Components } />
        
        <Route exact path ="/components/progress">
          <Progress />
          <Components />
        </Route>
        <Route exact path ="/components/catchmeifyoucan">
          <CatchMeIfYouCan jump = { 150 }/>
          <Components />
        </Route>
        <Route exact path ="/components/password">
          <PasswordStrength />
          <Components />
        </Route>
    
        <Route component = { FourOhFour }>
          
          </Route>


      </Switch>
      <Footer />
    </div>
  </Router>
);

export default App;
