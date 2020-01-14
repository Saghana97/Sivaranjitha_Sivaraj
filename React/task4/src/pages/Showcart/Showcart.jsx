import React, { Component } from 'react'
import Container from '../Container/Container'
import '../Home/Home.css'
import './Showcart.css'
class Showcart extends Component {
    constructor(props) {
        super(props)
        var products=JSON.parse(localStorage.getItem('users'))
        var car=JSON.parse(localStorage.getItem("products"))
        var i=localStorage.getItem('userid')
        this.state = {
             cart:products[i].wish,
             isCart:false,
             pro:car
        }
    }
    componentDidMount=()=>{
        var producs=JSON.parse(localStorage.getItem('products'));
        console.log("cart",this.state.cart)
        var carts=[];
        this.state.cart.forEach(element => {
            producs.forEach(element1=>{
                if(element === element1.name)
                {
                    carts.push(element1)
                }
            })    
        });this.setState({
            pro:carts,
            isCart:true
        },  console.log("products",this.state.pro))
 
    }
    render() {
        return (
            <div>
                <button><a href="/home">Home</a></button>
          
            <div className="container">
                {
                    this.state.pro.map((element,i)=>(
                            <Container isCart={this.state.isCart} image={element.img} ids={i} name={element.name} price={element.price} func={this.componentDidMount}  key={i}/>
                    ))
                }
            </div>
            <button><a href="/home">Done</a></button>
            </div>
        )
    }
}
export default Showcart
