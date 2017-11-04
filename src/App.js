import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import "./components/Date.css";
import Header from "./components/Header";
import Searchbar from "./components/Searchbar";
import MapWithAFusionTablesLayer from "./components/Fusionmap"
import Datetime from 'react-datetime'
// import twitterdata from './components/twitterapi'
const twitterdata = require('./components/twitterapi')
console.log(twitterdata);

class App extends Component {
  render() {
    return( 
      <div className="container" twitterinfo={twitterdata}>
        <Header />
        <Searchbar/>
        <MapWithAFusionTablesLayer />
      </div>
    );
  }
}

export default App;
