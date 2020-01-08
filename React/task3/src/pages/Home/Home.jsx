import React, { Component } from 'react'
import './Home.css'
import '../../index.css'
import Container from '../Container/Container'

// import ReactFileReader from 'react-file-reader';
window.$tasks=[]
class Home extends Component {
   
   constructor(props) {
       super(props)
       if (localStorage.getItem("products") == null) {
        window.$tasks.push( {img:'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcT1rN8et5YnMt8021mwoctULfufJbSjkeW2GJU_4Spgq40loNp0iEoE78kLd01w0wrf1K7UXTtk5ZBMD4I52OynND0cJ7KTxB4QJWs48OQBhDeVwKpG7YzU&usqp=CAc',
        name:'Trolley',
        price:'8000'},
        {img:'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTB5C0HeFzH0ByLBNsGQM7zubckeCB0lpxiqYqCIrNLZgmabUrzBDeasFVBB4jp8wx48t8Au1jo45badwGEo_OdUBmXIxraqnAkAMR3wQmu3dftW8MuxtHB&usqp=CAc',
        name:'Washing Machine',
        price:'20000'},
        {img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOBCUYqDzu2lgy67SBPsMcSi0zQUdXI9Y1horrNwu5HEmprXTkhA&s',
        name:'Headphones',
        price:'900'
        });

     }
       this.state = {
           open: false,
           productname:'',
           price:'',
           image:'',
           x:'',
           products:JSON.parse(localStorage.getItem("products"))
       }
       
   }
   
   handlePrice=(event)=>{
    this.setState({
        price:event.target.value
    })
    }
    handleName = (event)=>{
        this.setState({
            productname:event.target.value
        })
    }
      onOpenModal = () => {
        this.setState({ open: true });
      };
     
      onCloseModal = () => {
        this.setState({ open: false });
      };
      modalSubmit=(event)=>{
          var a= this.state.products;
          a.push({img:this.state.image,name:this.state.productname,price:this.state.price})
          this.setState({
            products:a
          }) 
         
            window.$tasks = JSON.parse(localStorage.getItem("products"));
            console.log(window.$tasks);
            window.$tasks.push({img:this.state.image,name:this.state.productname,price:this.state.price});
            localStorage.setItem("products", JSON.stringify(window.$tasks));          
      }
      handleUpload=(event)=>{
        var file = event.target.files[0];
        var reader=new FileReader();
        reader.onload=()=>{
      
            this.setState({
                image:reader.result
            }
            )
        }
        reader.readAsDataURL(file);
      }
     showCart=()=>{
        var tasks=JSON.parse(localStorage.getItem("users"));
        var cart=tasks[localStorage.getItem('userid')].wish;
        cart.forEach(element => {
            console.log(element);            
        });
     }
    render() {
       
        return (
            <div>
    <button type="button" className="add" data-toggle="modal" data-target="#myModal">Add Product</button>
    <button className="cart" onClick={this.showCart}>Show cart</button>
                    <div className="modal fade" id="myModal" role="dialog">
                        <div className="modal-dialog">
                            <div className="modal-content">
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
    
                                <div className="modal-header" id="change">
                                <b><h3>Enter the necessary details</h3></b>
                                    <input onChange={this.handleName} autoComplete="off" type="text" placeholder="Product Name" value={this.state.productname}/>
                                    <input autoComplete="off" onChange={this.handlePrice}  type="text" placeholder="Price" value={this.state.price} />
                                    <input type="file" onChange={this.handleUpload} />
                                    {/* <ReactFileReader base64={true} multipleFiles={true} handleFiles={this.handleFiles}>
                                        <button className='btn'>Upload</button>
                                    </ReactFileReader> */}
                                    <center><button type="submit" onClick={this.modalSubmit} data-dismiss="modal" >Submit</button></center>                         
                                </div>
                                <div className="modal-footer">
                                    <button type="button" data-dismiss="modal"  >Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                <div className="container">
                    {
                        this.state.products.map((element,i)=>(
                            <Container image={element.img} name={element.name} price={element.price}  key={i}/>
                        ))
                    }
                 </div>
            </div>
        )
    }
}

export default Home;
