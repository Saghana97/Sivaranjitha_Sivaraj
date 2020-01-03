import React, { Component } from 'react'
import Input from '../../Components/Input/Input'
import "../Login/Login.css"
class Signup extends Component {
    render() {
        return (
            <div>
                <form>
                    <h3>
                        Sign Up
                    </h3>
                    <Input type="text" name="username" placeholder="Enter your name"/>
                    <Input type="email" name="email" placeholder="Enter your email"/>
                    <Input type="password" name="password" placeholder="Enter your password"/>
                    <Input type="password" name="retypepassword" placeholder="Confirm your password"/>
                    <Input class="submit" type="submit" name="submit" />
                    <h3 className="small">
                       Already a member? <a href="/">Login</a>
                    </h3>
                        
                </form>
            </div>
        )
    }
}

export default Signup
