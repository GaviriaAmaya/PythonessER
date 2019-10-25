import React, { Component }from 'react';
//import logo from './logo.svg';
import './App.css';

// components 
import Epslist from './Components/Eps'
import Location from './Components/Location'
import Emergencys from './Components/Emergencys';
import Googlemaps from './Components/Maps'

export default class App extends Component {
  
  //state = {
    //tasks: 
  //}
  
  render() { 
  return <div className='container'>
      <div className='lists'>
        <Location/>
        <Epslist/>
        <Emergencys/>
      </div>
        <Googlemaps/>
    </div>
  } 
}
