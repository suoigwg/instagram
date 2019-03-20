import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './common/header/js/header';
import UserList from './common/header/js/suggested-users';
import Home from './pages/home';
import Picture from './common/header/js/picture';
import Discover from './pages/discover'
import Profile from './pages/profile';
import {BrowserRouter, Route} from "react-router-dom";
import {connect, Provider} from 'react-redux';
import store from "./common/header/store/store";
import {actionCreators} from "./common/header/store";

class App extends Component {
  render() {
    return (
        <Provider store={store}>
            <div className="App">
                <BrowserRouter>
                    <div>
                        <div>
                            <Picture/>
                            <Header/>
                            <Route path='/' exact component={Home}/>
                            <Route path='/discover' exact component={Discover}/>
                            <Route path='/user/:id' exact component={Profile}/>

                        </div>
                    </div>
                </BrowserRouter>
            </div>
        </Provider>

    );
  }

}


export default App;