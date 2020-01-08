import React,{ Component } from 'react'
import ReactDOM from 'react-dom'
import './Container.css'
class Container extends Component {
    constructor(props) {
        super(props)
        this.state = {
            checked: false ,check:'Add to cart',name1:this.props.name,
            isClicked:false,
        }
    }
    
    state = { 
            }
    handleCheckboxChange = (event) =>
    { 
        this.setState({
            checked: event.target.checked,
            },()=>{
                var tasks;
                if(this.state.checked){
                this.setState({
                    check: "Added to cart"
                })
                console.log(localStorage.getItem('userid'))
                console.log(this.state.name1)
                tasks=JSON.parse(localStorage.getItem("users"));
                console.log(this.state.name1)
                var i=localStorage.getItem('userid');
                tasks[i].wish.push(this.state.name1);
                tasks[i].wish=this.uniqueArray2(tasks[i].wish);
                localStorage.setItem("users", JSON.stringify(tasks));
            }
            else{
                this.setState({
                    check: "Add to cart"
                },()=>{
                    tasks=JSON.parse(localStorage.getItem("users"));
                    console.log(tasks[localStorage.getItem('userid')].wish)
                    var valueToRemove=this.state.name1;
                    var filters=tasks[localStorage.getItem('userid')].wish.filter(item => item !== valueToRemove);
                    tasks[localStorage.getItem('userid')].wish=filters;  
                    console.log(tasks[localStorage.getItem('userid')].wish);
                    localStorage.setItem("users", JSON.stringify(tasks));
                })
            }})
            
            
        } 
        uniqueArray2(arr) {
            var a = [];
            for (var i=0, l=arr.length; i<l; i++)
                if (a.indexOf(arr[i]) === -1 && arr[i] !== '')
                    a.push(arr[i]);
            return a;
        }
        changecolor=(event)=>{
            var c=this.state.isClicked;
          
            this.setState({
                isClicked:!c
            },()=>{
            let icon=document.getElementById(this.props.ids);
            ReactDOM.findDOMNode(icon).style.color= this.state.isClicked?'yellow' : 'black';
            var tasks;
            var i=localStorage.getItem('userid');
            if(this.state.isClicked){
                tasks=JSON.parse(localStorage.getItem("users"));
                tasks[i].fav.push(this.state.name1);
                tasks[i].fav=this.uniqueArray2(tasks[i].fav);
                localStorage.setItem("users", JSON.stringify(tasks));                   
           }
           else{
            var valueToRemove=this.state.name1;
            tasks=JSON.parse(localStorage.getItem("users"));
            var filters=tasks[i].fav.filter(item => item !== valueToRemove);
            tasks[i].fav=filters;  
            console.log(tasks[localStorage.getItem('userid')].fav);
            localStorage.setItem("users", JSON.stringify(tasks));  
           }
            })
               
            
            
        }
    render() {
       
        return (
            <div>
                <div className="contain">
                    <div id='staricon'>
                    <i className='fas fa-star icon' id={this.props.ids} onClick={this.changecolor} ></i>
                    </div>
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
