import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Searchbar from "./components/Searchbar";
import Datehandler from "./components/Datehandler";
import DemoApp from "./components/Mapview"
import MapWithAFusionTablesLayer from "./components/Fusionmap"

class App extends Component {
  render() {
    return <div>
        <Header />
        <Searchbar />
        <Datehandler />
        {/* <DemoApp /> */}
        <MapWithAFusionTablesLayer />;
      </div>;
  }
}

export default App;
