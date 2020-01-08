import React, { Component } from 'react'
import '../../Components/Input/Input.css'
import "../Login/Login.css"
import Logo from '../../images/Login.png'
class Signup extends Component {
    constructor(props) {
        super(props)
    
        this.state = ({
            username:'',
            email:'',
            password:'',
            retypepassword:''  
        })
    }
    

    handleUsernameChange=(event)=>{
        this.setState({
            username:event.target.value
        })
     }
     handlePasswordChange=(event)=>{
         this.setState({
             password:event.target.value
         })
      }
    handleRetypepasswordChange=(event)=>{
        this.setState({
            retypepassword:event.target.value
        })
     }
     handleEmailChange=(event)=>{
         this.setState({
             email:event.target.value
         })
      }
     
      validateRetypePassword=()=>
      {
          var pass=this.state.password;
          var repass=this.state.retypepassword;
          if(pass!==repass){
              alert("passwords do not match");
              return false;
          }
          else{
              return true;
          }
      }
    
      validate=()=>{
         
          var r=this.validateRetypePassword();
          if(r){
            let username = this.state.username;
            let password =this.state.password;
            var email =this.state.email;
            let tasks;
            if (localStorage.getItem("users") == null) {
               tasks = [];
            } else {
               tasks = JSON.parse(localStorage.getItem("users"));
            }
            tasks.push({ usr: username, pass: password ,email: email,fav:[],wish:[]});
            localStorage.setItem("users", JSON.stringify(tasks));
            alert("Signup Successful!");
            this.props.history.push('/'); 
        }
        else{
            alert("Invalid SIgnup");
        }
      }  
    render() {
        return (
           <div className="maincontent">
            <div>
                <form onSubmit={this.validate}>
                    <h3>
                        Sign Up
                    </h3>
                    <input type="text" name="username"  pattern="[A-Z][a-z]{1,15}" value={this.state.username}  onChange={this.handleUsernameChange} placeholder="Enter your name"/>
                    <input type="email" name="email" value={this.state.email}  onChange={this.handleEmailChange} placeholder="Enter your email"/>
                    <input type="password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" name="password"value={this.state.password}  onChange={this.handlePasswordChange} placeholder="Enter your password"/>
                    <input type="password" name="retypepassword" value={this.state.retypepassword}  onChange={this.handleRetypepasswordChange} placeholder="Confirm your password"/>
                    <br/>
                    <input className="submit" type="submit" name="submit" />
                    <h3 className="small">
                       Already a member? <a href="/">Login</a>
                    </h3>   
                </form>
            </div>
            <img src={Logo} alt="side"/>
           </div>
        )
    }
}

export default Signup
