document.getElementById("modal1").addEventListener("mouseover",function(){
    document.getElementById("modals").style.display="flex";
    document.getElementById("modals").style.left= "840";
});

document.getElementById("modal1").addEventListener("mouseout",function(){
    document.getElementById("modals").style.display="none";
   
});

document.getElementById("modal2").addEventListener("mouseover",function(){
    document.getElementById("modals").style.display="flex";
    document.getElementById("modals").style.left= "500";
});

document.getElementById("modal2").addEventListener("mouseout",function(){
    document.getElementById("modals").style.display="none";
   
});
document.getElementById("modal3").addEventListener("mouseover",function(){
    document.getElementById("modals").style.display="flex";
    document.getElementById("modals").style.left="725";
});

document.getElementById("modal3").addEventListener("mouseout",function(){
    document.getElementById("modals").style.display="none";
   
});



document.getElementById("udemy").addEventListener("mouseout",function(){
    document.getElementById("udemymodal").style.display="none";
   
});

document.getElementById("udemy").addEventListener("mouseover",function(){
    document.getElementById("udemymodal").style.display="block";
   
});



document.getElementById("cat").addEventListener("mouseover",function(){
    document.getElementById("categorymodal").style.display="flex";
});

document.getElementById("out").addEventListener("click",function(){
    document.getElementById("categorymodal").style.display="none";
    document.getElementById("business").style.display="none";
    document.getElementById("develop").style.display="none";
    document.getElementById("webdevelop").style.display="none";
    document.getElementById("datascience").style.display="none";
});

document.getElementById("development").addEventListener("mouseover",function(){
    document.getElementById("develop").style.display="flex";
    document.getElementById("categorymodal").style.display="flex";
    document.getElementById("business").style.display="none";
});

document.getElementById("development").addEventListener("click",function(){
    document.getElementById("develop").style.display="none";
    document.getElementById("webdevelop").style.display="none";
    document.getElementById("datascience").style.display="none";
    document.getElementById("develop").style.display="none";
    document.getElementById("webdevelop").style.display="none";
});



document.getElementById("bus").addEventListener("mouseover",function(){
    document.getElementById("develop").style.display="none";
    document.getElementById("webdevelop").style.display="none";
    document.getElementById("datascience").style.display="none";
    document.getElementById("categorymodal").style.display="flex";
    document.getElementById("business").style.display="flex";
});

document.getElementById("bus").addEventListener("click",function(){
    document.getElementById("business").style.display="none";
    document.getElementById("webdevelop").style.display="none";
    document.getElementById("datascience").style.display="none";

});

document.getElementById("web").addEventListener("mouseover",function(){
document.getElementById("webdevelop").style.display="flex";
document.getElementById("datascience").style.display="none";
});

document.getElementById("data").addEventListener("mouseover",function(){
    document.getElementById("webdevelop").style.display="none";
    document.getElementById("datascience").style.display="flex";
});