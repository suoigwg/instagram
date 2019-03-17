import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './common/header/js/header'
import Home from './common/header/js/home'
import Profile from './pages/profile'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Profile/>
      </div>
    );
  }
}

export default App;
