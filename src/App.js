import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './common/header/js/header';
import UserList from './common/header/js/suggested-users';
import Home from './common/header/js/home';
import Discover from './pages/discover'
import Profile from './pages/profile';
import {BrowserRouter, Route} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
          <BrowserRouter>
              <div>
                  <div>
                      <Header/>
                      <Route path='/' exact component={Home}/>
                      <Route path='/discover' exact component={Discover}/>
                      <Route path='/user/:id' exact component={Profile}/>
                      <Route path='/list' exact component={UserList}/>

                  </div>
              </div>
          </BrowserRouter>
      </div>
    );
  }
}

export default App;
