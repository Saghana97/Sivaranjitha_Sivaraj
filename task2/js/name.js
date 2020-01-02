function namelist(){  
    check();
    var li,ip;
  var ref = firebase.database().ref("names");
  var ul=document.getElementById("lists");
  ref.on("value", gotData,errData);
  function gotData(data){
      var shows= JSON.parse(data.val());
      shows.forEach((element,i) => {
          li= document.createElement('li');
          ip=document.createElement("input");
          ip.id="inputn"+i;
          ip.value=element;
          li.appendChild(ip);
          ul.appendChild(li);
          
      });
      li.appendChild(document.createElement("br"));
      li.appendChild(document.createElement("br"));
      var edit=document.createElement("button");
      edit.textContent="Edit";
      function edits(){
  
          shows.forEach((element,i) => {
              shows[i]=document.getElementById("inputn"+i).value;
          });
          ref.set(JSON.stringify(shows));
      check();
      }
      edit.onclick=edits;
      li.appendChild(edit);
      ul.appendChild(li);
      }
  }
  
  function errData(err){
      console.log('Error!');
      console.log(err);
  }