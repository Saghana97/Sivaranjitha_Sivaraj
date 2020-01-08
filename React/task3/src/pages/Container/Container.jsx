import React, { Component } from 'react'
import './Container.css'
class Container extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            checked: false ,check:'Add to cart',name1:this.props.name,
        }
    }
    
    state = { 
            }
    handleCheckboxChange = (event) =>
    { 
        this.setState({
            checked: event.target.checked,
            })
            if(!this.state.checked){
                this.setState({
                    check: "Added to cart"
                })
                console.log(localStorage.getItem('userid'))
                console.log(this.state.name1)
                var tasks=JSON.parse(localStorage.getItem("users"));
                console.log(this.state.name1)
                tasks[localStorage.getItem('userid')].wish.push(this.state.name1)
                localStorage.setItem("users", JSON.stringify(tasks));

            }
            else{
                this.setState({
                    check: "Add to cart"
                })
            }
            
        } 
    render() {
       
        return (
            <div>
                <div className="contain">
                   <div> <img className="images" src={this.props.image}alt="name"/>
                    </div>
                    <div>{this.props.name}</div>
                    <div>{this.props.price}</div>
                    <div className="check">
                        <div>
                        <input type="checkbox" checked={this.state.checked}  onChange={this.handleCheckboxChange}/>
                        </div>
                        <div>
                        {this.state.check}
                        </div>
                    </div>
                    
                </div>
                
            </div>
        )
    }
}

export default Container
