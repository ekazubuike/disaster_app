import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import "./components/Date.css";
import Header from "./components/Header";
import Searchbar from "./components/Searchbar";
import Datetime from 'react-datetime'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Searchbar/>
        <Datetime />
      </div>
    );
  }
}

export default App;
