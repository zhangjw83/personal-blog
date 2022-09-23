
import React, { Component} from "react";
import "./App.css";
import {hot} from 'react-hot-loader'

class App extends Component{
  render(){
    return(
      <div className="App">
        <h1> personal blog prototype! I'm changed twice successful NB</h1>
      </div>
    );
  }
}

export default hot(module)(App);