function signup() {
         
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let repassword = document.getElementById("repassword").value;
    let tasks;
    if (localStorage.getItem("users") == null) {
       tasks = [];
    } else {
       tasks = JSON.parse(localStorage.getItem("users"));
     }
//   console.log(username, password);
if (password == repassword) {
  tasks.push({ usr: username, pass: password });
  localStorage.setItem("users", JSON.stringify(tasks));
  alert("Signup Successful!");
} else {
  alert("password didnt match!!");
}

username = "";
password = "";
repassword = "";
modal.style.display = "none";
}
