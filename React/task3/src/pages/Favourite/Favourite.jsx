import React, { Component } from 'react'
import Container from '../Container/Container'
import '../Home/Home.css'
import './Favourite.css'
class Favourite extends Component {
    constructor(props) {
        super(props)
        var products=JSON.parse(localStorage.getItem('users'))
        var pros=JSON.parse(localStorage.getItem('products'))
        var i=localStorage.getItem('userid')
        this.state = {
             fav:products[i].fav,
             isFav:false,
             Favourite:pros
        }
    }
    componentDidMount=()=>{
        var producs=JSON.parse(localStorage.getItem('products'));
        console.log("Fav",this.state.fav)
        var favs=[];
        this.state.fav.forEach(element => {
            producs.forEach(element1=>{
                if(element === element1.name)
                {
                    favs.push(element1)
                }
            })    
        });this.setState({
           Favourite:favs,
            isFav:true
        }, console.log("Favs",Favourite))
  
    }
    render() {
        return (
            <div>
                <button><a href="/home">Home</a></button>
          
            <div className="container">
                {
                    this.state.Favourite.map((element,i)=>(
                            <Container isFav={this.state.isFav} image={element.img} ids={i} name={element.name} price={element.price} key={i}/>
                    ))
                }
            </div>
            <button><a href="/home">Done</a></button>
            </div>
        )
    }
}
export default Favourite
