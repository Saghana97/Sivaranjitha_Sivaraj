import React, { Component } from 'react'
import "./Header.css"
import logo from "../../images/codingmart.png";
class Header extends Component {
    render() {
        return (
        <div>
            <div className="header">
                <div>
                    <img src={logo} id="logo"alt="logo"></img>
                </div>
        </div>
        </div>
        )
    }
}

export default Header
