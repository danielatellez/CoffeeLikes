import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AddNew from './Components/AddNew';



class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Coffee Likes</h1>

        <AddNew/>

      </div>
    );
  }
}

export default App;
