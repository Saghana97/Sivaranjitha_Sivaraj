
let tasks;
    if (localStorage.getItem("users") == null) {
      tasks = [];
    } 
    else {
      tasks = JSON.parse(localStorage.getItem("users"));
    } 
var x=document.createElement("IMG");
user=tasks[i].usr;
x.setAttribute("src", tasks[i].image1); 
var y=document.createElement("DIV");
var text=document.createTextNode(user)
y.appendChild(x);
y.appendChild(text);
console.log(y)
var head=document.getElementById("header");
if(head!=head){
    head.appendChild(y);
}        
document.getElementById("user").style.display="none";
document.getElementById("user1").style.display="none";