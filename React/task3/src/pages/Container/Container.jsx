import React,{ Component } from 'react'
import ReactDOM from 'react-dom'
import './Container.css'
import '../Home/Home.css'
import '../../index.css'
class Container extends Component {
    constructor(props) {
        super(props)
        this.state = {
            checked: false ,check:'Add to cart',name1:this.props.name,
            isClicked:false,removed:false,remove:'Remove from cart',
            name:this.props.name,
            image:this.props.image,
            price:this.props.price,
            namec:this.props.name,
            pricec:this.props.price,
            imagec:this.props.image,
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
                tasks=JSON.parse(localStorage.getItem("users"));
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
                    var valueToRemove=this.state.name1
                    var filters=tasks[localStorage.getItem('userid')].wish.filter(item => item !== valueToRemove);
                    tasks[localStorage.getItem('userid')].wish=filters;  
                    console.log(tasks[localStorage.getItem('userid')].wish);
                    localStorage.setItem("users", JSON.stringify(tasks));
                })
            }})
            
            
        } 
        removeCart=(event)=>{
            this.setState({
                removed: event.target.checked,
                },()=>{
                    if(this.state.removed){
                        this.setState({
                            remove:"Removed from cart"
                        })
                    
                    var tasks=JSON.parse(localStorage.getItem("users"));
                    var valueToRemove=this.props.name;
                    var filters=tasks[localStorage.getItem('userid')].wish.filter(item => item !== valueToRemove);
                    tasks[localStorage.getItem('userid')].wish=filters;  
                    console.log(tasks[localStorage.getItem('userid')].wish,this.state.removed);
                    localStorage.setItem("users", JSON.stringify(tasks));
                    }
                    else{
                        this.setState({
                            remove:"Remove from cart"
                        },()=>{
                            tasks=JSON.parse(localStorage.getItem('users'));
                            var userid=localStorage.getItem('userid')
                            console.log("added to cart",tasks[userid].wish);
                            console.log(this.props.name);
                            tasks[userid].wish.push(this.props.name);
                            tasks[userid].wish=this.uniqueArray2(tasks[userid].wish);
                            console.log(tasks[userid].wish)
                            localStorage.setItem("users",JSON.stringify(tasks))
                        })
                    }
                })
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
        editName=(event)=>{
            this.setState({
                namec:event.target.value
            })
        }
        editPrice=(event)=>{
          this.setState({
              pricec:event.target.value
            });
        }
        editUpload=(event)=>{
            var file = event.target.files[0];
            var reader=new FileReader();
            reader.onload=()=>{
          
                this.setState({
                    imagec:reader.result
                }
                )
            }
            reader.readAsDataURL(file);
        }
        editSubmit=()=>{
            var n=this.state.name
            var i=this.state.image
            var p=this.state.price
            this.setState({
                name:this.state.namec,
                price:this.state.pricec,
                image:this.state.imagec,
            },()=>{
                var pro=JSON.parse(localStorage.getItem("products"))
                pro.forEach(element => {

                    if(n===element.name)
                    {
                       element.name=this.state.name;
                    }
                    if(p===element.price)
                    {
                        element.price=this.state.price;
                    }
                    if(i===element.img)
                    {
                        element.img=this.state.image;
                    }
                });
                console.log("changedpro",pro);
                localStorage.setItem("products",JSON.stringify(pro));
            })
        }
        deleteItem=()=>{
            var name=this.state.name;
            console.log(this.props.name)
            var pro=JSON.parse(localStorage.getItem("products"))
            pro.forEach(element => {

                if(name === element.name)
                {
                  pro.splice(pro.indexOf(element),1)
                }
            });
            localStorage.setItem('products',JSON.stringify(pro));
            location.reload();
        }
    render() {
       
        return (
            <div>
                   <div className="modal fade" id="myModals" role="dialog">
                        <div className="modal-dialog">
                            <div className="modal-content">
                            <button type="button" className="close"  data-dismiss="modal">&times;</button>
    
                                <div className="modal-header">
                                    <b><h3>Edit the product</h3></b>
                                    <input onChange={this.editName} autoComplete="off" type="text" placeholder={this.state.name} value={this.state.namec}/>
                                    <input autoComplete="off" onChange={this.editPrice}  type="text" placeholder={this.state.price} value={this.state.pricec} />
                                    <input type="file" onChange={this.editUpload} />
                                    {/* <ReactFileReader base64={true} multipleFiles={true} handleFiles={this.handleFiles}>
                                        <button className='btn'>Upload</button>
                                    </ReactFileReader> */}
                                    <center><button type="submit" onClick={this.editSubmit} data-dismiss="modal" >Submit</button></center>                         
                                </div>
                                <div className="modal-footer">
                                    <button type="button"onClick={this.deleteItem} data-dismiss="modal">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>
                <div className="contain" >
             
                    <div id='staricon'>
                        {this.props.isFav?( <i className='fas fa-star icon' id={this.props.ids} onClick={this.changecolor} style={{color:"yellow"}} ></i>):
                        ( <i className='fas fa-star icon' id={this.props.ids} onClick={this.changecolor} ></i>)}
                        </div>
                   <div> <img className="images" data-toggle="modal" data-target="#myModals" src={this.state.image}alt="name"/> 
                    </div>
                    <div>{this.state.name}</div>
                    <div>{this.state.price}</div>
                  { !this.props.isCart ? (
                  <div className="check">
                        <div>
                            <input type="checkbox" checked={this.state.checked}  onChange={this.handleCheckboxChange}/>
                        </div>
                        <div>
                            {this.state.check}
                        </div>
                    </div>)
                    :
                    <div className="check">
                        <input type="checkbox" checked={this.state.removed} onChange={this.removeCart} />
                        <div>
                            {this.state.remove}
                        </div>
                    </div>}
                    
                </div>
                
            </div>
        )
    }
}

export default Container
