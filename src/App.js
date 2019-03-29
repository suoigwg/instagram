import React, {Component} from 'react';
import './App.css';
import Header from './common/components/js/header';
import Home from './pages/home';
import Picture from './common/components/js/picture';
import Discover from './pages/discover'
import Profile from './pages/profile';
import {BrowserRouter, Route} from "react-router-dom";
import {Provider} from 'react-redux';
import store from "./common/components/store/store";


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