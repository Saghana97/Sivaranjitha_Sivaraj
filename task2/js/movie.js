function movielist(){  
    check();
    var li,ip;
  var ref = firebase.database().ref("movies");
  var ul=document.getElementById("lists");
  ref.on("value", gotData,errData);
  function gotData(data){
      var shows= JSON.parse(data.val());
      shows.forEach((element,i) => {
          li= document.createElement('li');
          ip=document.createElement("input");
          ip.id="inputm"+i;
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
              shows[i]=document.getElementById("inputm"+i).value;
          });
          ref.set(JSON.stringify(shows));
      check();
      }
      edit.onclick=edits;
      li.appendChild(edit);
      ul.appendChild(li);
      }
// var ref=firebase.database().ref("games");
// ref.set(JSON.stringify(["Clash of cans","Candy crush","Blossam blast"]) );
// var ref=firebase.database().ref("names");
// ref.set(JSON.stringify( ["Siva","Indhu","Ranjitha"]));
// var ref=firebase.database().ref("movies");
// ref.set(JSON.stringify(["Tamil","BIgil","Thambi"]));
// var ref=firebase.database().ref("books");
// ref.set(JSON.stringify(["Wings of fire","Palace of illusion","Mackbeth"]));



  }
  
  function errData(err){
      console.log('Error!');
      console.log(err);
  }