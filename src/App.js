import React, { Component }from 'react';
//import logo from './logo.svg';
import './App.css';

// components
import './Components/Map' 
import Epslist from './Components/Eps'
import Location from './Components/Location'
import Emergencys from './Components/Emergencys';

class App extends Component {
  
  //state = {
    //tasks: 
  //}
  
  render() { 
  return <div>
    <h1>
      hola
    </h1>
    <Epslist/>
    <br/>
    <Location/>
    <br/>
    <Emergencys/>
  </div>
  } 
}

export default App;