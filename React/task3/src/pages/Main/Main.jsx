import React, { Component } from 'react';
import Login from '../Login/Login';
import Signup from '../Signup/Signup';
import Header from '../Header/Header';
import './Main.css'
import Logo from '../../images/Login.png'
import {BrowserRouter as Switch,Route} from 'react-router-dom';
class Main extends Component {
 
  render() {
    return (
  
      <div className="Main">
        <Header/>
       <center>
        <div className="maincontent">
            <Switch>
                <Route path="/signup" component={Signup}/>
                <Route path="/" exact component={Login}/>
            </Switch>
                <img src={Logo} alt="side"/>
            
       
        </div>
       </center>
      </div>
    );
  }
}

export default Main;
