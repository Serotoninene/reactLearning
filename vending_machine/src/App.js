import './App.css';
import React from 'react';
import {
  Switch,
  Route,
} from "react-router-dom";
import Navbar from './Navbar'
import Vending from './Vending'
import Coke from './Coke'
import Prout from './Prout'


function App() {
  return (
    <div className="App">
    <Navbar />
     <Switch >
       <Route exact path = "/" component = {Vending}/>
       <Route exact path = "/coke" component = {Coke}/>
       <Route exact path = "/prout" component = {Prout}/>
     </Switch>
    </div>
  );
}

export default App;
