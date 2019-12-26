
function login() 
{
  var usernamel = document.getElementById("userlogin").value;
  var passwordl = document.getElementById("passwordlogin").value;
  //   console.log(username);
  let tasks;
  if (localStorage.getItem("users") == null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("users"));
  }

  console.log(tasks.length);
  let userExit = false;
  let Valid = false;
  var i = 0;
  for (i = 0; i < tasks.length; i++) {
    console.log(tasks[i]);
    if (tasks[i].usr == usernamel) {
      if (tasks[i].pass == passwordl) {
        userExit = true;
        Valid = true;
        alert("login Successful!!");
       window.location.href ="index.html";
        break;
      } else {
        userExit = true;
        alert("Not Valid User!! or Wrong Password");
        break;
      }
    }
  }
  usernamel = "";
  passwordl = "";

  
  
}