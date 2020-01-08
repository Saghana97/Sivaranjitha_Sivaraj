import React, { Component } from 'react'
import Container from '../Container/Container'

class Showcart extends Component {
    constructor(props) {
        super(props)
        var products=JSON.parse(localStorage.getItem('users'))
        var i=localStorage.getItem('userid')
        this.state = {
             cart:products[i].wish
        }
    }
    componentDidMount=()=>{
        var products=JSON.parse(localStorage.getItem('products'));
        var carts=[];
        var names=[]
      
        // console.log(carts);
        products.forEach(element => {
           names.push(element.name)   
        });
        console.log("names",names)
        this.state.cart.forEach(element => {
            carts=names.filter(item => item !== element)
         });
        console.log("cart",this.state.cart,"carts",carts);
    }
    render() {
        return (
            <div>
                {
                    this.state.cart.map((element,i)=>(
                        <Container image={element.img} ids={i} name={element.name} price={element.price}  key={i}/>
                    ))
                }
            </div>
        )
    }
}

export default Showcart
