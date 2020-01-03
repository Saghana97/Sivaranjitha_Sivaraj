import React, { Component } from 'react'
import Input from '../../Components/Input/Input'
import "./Login.css"
// import {BrowserRouter as Link} from 'react-router-dom';
class Login extends Component {
    render() {
        return (
            <div>
                <form>
                    <h3>
                        Login
                    </h3>
                    <Input type="text" name="username" placeholder="Enter your name"/>
                    <Input type="password" name="password" placeholder="Enter your password"/>
                    <Input class="submit" type="submit" name="submit" />
                    <h3 className="small">
                        Don't have an account?  <a href="/signup">Sign Up</a>
                    </h3>
                       
                </form>
            </div>
        )
    }
}

export default Login
