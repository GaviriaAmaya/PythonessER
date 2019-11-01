import React, { Component }from 'react';
//import logo from './logo.svg';
import './App.css';

// components 
import Epslist from './Components/Eps'
import Location from './Components/Location'
import Emergencys from './Components/Emergencys';
import Googlemaps from './Components/Maps'

// Connection to MySQL
//let mysql = require("mysql");
//
//app.use(function(req, res, next) {
//  res.locals.connection = mysql.createConnection( {
//    host     : 'localhost',
//    user     : 'root',
//    password : '',
//    database : 'EPS'
//    });
//  res.locals.connect();
//  next();
//});
//
//app.use('/', index);
//app.use('/src/Components/Eps', Eps);


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
