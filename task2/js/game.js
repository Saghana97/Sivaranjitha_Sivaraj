var ref,show1,show2,show3,s1,s2,s3;
  function gamelist(){  
  check();
  var li,ip;
  
var ref = firebase.database().ref("games");
var ul=document.getElementById("lists");
ref.on("value", gotData,errData);
function gotData(data){
    var shows= JSON.parse(data.val());
    shows.forEach((element,i) => {
        li= document.createElement('li');
        ip=document.createElement("input");
        ip.id="inputg"+i;
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
            shows[i]=document.getElementById("inputg"+i).value;
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

function display1(){
    
    s1=document.getElementById("s1").value;
    ref=firebase.database().ref(s1);
    ref.on("value",showdata,errData);
    function showdata(datum)
    {
        console.log(datum.val());
     show1= JSON.parse(datum.val());
    }
}
function display2()
{ 
    s2=document.getElementById("s2").value;
    ref=firebase.database().ref(s2);
    ref.on("value",showdata,errData);
    function showdata(datum)
    {
        console.log(datum.val());
        show2= JSON.parse(datum.val());
    }
}
 function display3(){
    
    s3=document.getElementById("s3").value;
    ref= firebase.database().ref(s3);
    var save;
    ref.on("value",showdata,errData);
    function showdata(datum)
    {
        show3= JSON.parse(datum.val());
        show2=show2.concat(show1);
        show3=show3.concat(show2);      
    }
}
function saves(){
    var s=show3;
     show3 = uniqueArray2(s);
    function uniqueArray2(arr) {
        var a = [];
        for (var i=0, l=arr.length; i<l; i++)
            if (a.indexOf(arr[i]) === -1 && arr[i] !== '')
                a.push(arr[i]);
        return a;
    }
    console.log(JSON.stringify(show3));
    ref= firebase.database().ref(s3);
    ref.set(JSON.stringify( show3));
    check();
}
function refresh(){

var ref=firebase.database().ref("games");
ref.set(JSON.stringify(["Clash of cans","Candy crush","Blossam blast"]) );
var ref=firebase.database().ref("names");
ref.set(JSON.stringify( ["Siva","Indhu","Ranjitha"]));
var ref=firebase.database().ref("movies");
ref.set(JSON.stringify(["Tamil","BIgil","Thambi"]));
var ref=firebase.database().ref("books");
ref.set(JSON.stringify(["Wings of fire","Palace of illusion","Mackbeth"]));
check();

}