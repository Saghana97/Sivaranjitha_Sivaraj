
 var tasks;
 if (localStorage.getItem("users") == null) {
   tasks = [];
 } else {
   tasks = JSON.parse(localStorage.getItem("users"));
 }
function login() 
{
  var usernamel = document.getElementById("userlogin").value;
  var passwordl = document.getElementById("passwordlogin").value;
  console.log(tasks.length);
  var userExit = false;
  var Valid = false;
  var images,user;
  var i;
  for (i = 0; i < tasks.length; i++) {
    console.log(tasks[i]);
    if (tasks[i].usr == usernamel) {
      if (tasks[i].pass == passwordl) {
        userExit = true;
        Valid = true;
        alert("login Successful!!");  
        localStorage.setItem('a',1);
        localStorage.setItem('c',i);  
        window.location.href ="index.html";
        break;
      } else {
        userExit = true;
        localStorage.setItem('a',0);      
        alert("Not Valid User!! or Wrong Password");
        break;
      }
    }
  }
  usernamel = "";
  passwordl = "";
}
function loads(){
  var head1=document.getElementById("header");
  let i=localStorage.getItem('c');
  if(localStorage.getItem('a')==1)
  {
   var urls= tasks[i].img.slice(12);
    var x=document.createElement("IMG");
    x.src=urls;
    x.setAttribute("width", "50");
    x.setAttribute("height", "50");
    x.style.borderRadius="50%";
    x.style.padding="20px";
    var y=document.createElement("DIV");
    y.setAttribute("id","del");
    var text=document.createTextNode(tasks[i].usr);
    y.appendChild(x);
    y.appendChild(text);
    y.style.alignItems="center";
    y.style.display="inline-flex";
    head1.appendChild(y);   
    var logout=document.createElement("button");
    logout.style.height="40";
    logout.style.width="60";
    logout.style.background="red";
    logout.style.color="#ffffff";
    logout.setAttribute("id","log");
    logout.appendChild(document.createTextNode("Log Out"));
    head1.appendChild(logout); 
    logout.setAttribute("onclick","logout()");
    document.getElementById("user").style.display="none";
    document.getElementById("user1").style.display="none";
    
  }
}
function logout(){
  document.getElementById("user").style.display="block";
  document.getElementById("user1").style.display="block";
  document.getElementById("del").style.display="none";
  document.getElementById("log").style.display="none";
  localStorage.setItem('a',0);
}