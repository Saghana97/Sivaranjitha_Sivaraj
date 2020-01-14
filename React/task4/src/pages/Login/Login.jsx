import React, { Component } from 'react'
import "./Login.css"
 import auth from '../Header/auth'
import '../../Components/Input/Input.css'
import Logo from '../../images/Login.png'
// import {Redirect} from 'react-router-dom'
class Login extends Component {
    // componentDidMount=()=>{
    //             var tasks= [];
    //             tasks.push({img:'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcT1rN8et5YnMt8021mwoctULfufJbSjkeW2GJU_4Spgq40loNp0iEoE78kLd01w0wrf1K7UXTtk5ZBMD4I52OynND0cJ7KTxB4QJWs48OQBhDeVwKpG7YzU&usqp=CAc',
    //             name:'Trolley',
    //             price:'8000'},
    //             {img:'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTB5C0HeFzH0ByLBNsGQM7zubckeCB0lpxiqYqCIrNLZgmabUrzBDeasFVBB4jp8wx48t8Au1jo45badwGEo_OdUBmXIxraqnAkAMR3wQmu3dftW8MuxtHB&usqp=CAc',
    //             name:'Washing Machine',
    //             price:'20000'},
    //             {img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOBCUYqDzu2lgy67SBPsMcSi0zQUdXI9Y1horrNwu5HEmprXTkhA&s',
    //             name:'Headphones',
    //             price:'900'
    //             });
    //             console.log(tasks);
    //             localStorage.setItem('products',JSON.stringify(tasks))
    // }
    constructor(props) {
        super(props)
    
        this.state =({
            username:'',
            password:''
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
    
     handleSubmitChange=(event)=>{
     var username=this.state.username;
     var password=this.state.password;
     
        var tasks;
        if (localStorage.getItem("users") == null) {
          tasks = [];
        } else {
          tasks = JSON.parse(localStorage.getItem("users"));
        }
         var i;
        for (i = 0; i < tasks.length; i++) {
            if (tasks[i].usr === username) {
              if (tasks[i].pass === password)
              {
                localStorage.setItem('userid',i)
                auth.login(()=>
                {
                    if(auth.isAuthenticated){
                        this.props.history.push("/home");
                    }                  
                })
              } 
              else 
              {
                alert("Not Valid User!! or Wrong Password");
                break;
              }
            }
          }      
     }
    render() {
        return (
            <div className="maincontent">
                <div>
                <div className="side">
                    <h3>
                        Login
                    </h3>
                    <input type="text"  pattern="[A-Z][a-z]{1,15}" value={this.state.username} name="username" onChange={this.handleUsernameChange} placeholder="Enter your name"/>
                    <input type="password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" value={this.state.password} name="password" onChange={this.handlePasswordChange} placeholder="Enter your password"/>
                    <br/>
                    <input onClick={this.handleSubmitChange} className="submit" type="submit"/>
                    <h3 className="small">
                        Don't have an account?  <a href="/signup">Sign Up</a>
                    </h3>
                </div>
            </div>
            <img src={Logo} alt="side"/>
     </div>
        )
    }
}

export default Login;
