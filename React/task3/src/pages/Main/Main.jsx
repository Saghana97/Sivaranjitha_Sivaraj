import React, { Component } from 'react';
import Login from '../Login/Login';
import Signup from '../Signup/Signup';
import Header from '../Header/Header';
import './Main.css'
import ProtectedRoute from '../Header/ProtectedRoute'
import Home from '../Home/Home'
import {BrowserRouter as Switch,Route} from 'react-router-dom';
class Main extends Component {
 
  render() {
    return (
  
      <div className="Main">
        <Header/>
       <center>
        <div>
            <Switch>
                <Route path="/signup" component={Signup}/>
                <Route path="/" exact component={Login}/>
                <ProtectedRoute exact path="/home" component={Home}/>
            </Switch>
               
            
       
        </div>
       </center>
      </div>
    );
  }
}

export default Main;
