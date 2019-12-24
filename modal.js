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

document.getElementById("teach").addEventListener("mouseout",function(){
    document.getElementById("teachmodal").style.display="none";
   
});

document.getElementById("teach").addEventListener("mouseover",function(){
    document.getElementById("teachmodal").style.display="block";
   
});


document.getElementById("cat").addEventListener("click",function(){
    document.getElementById("categorymodal").style.display="flex";
});

document.getElementById("out").addEventListener("click",function(){
    document.getElementById("categorymodal").style.display="none";
});

document.getElementById("development").addEventListener("mouseover",function(){
   
    document.getElementById("develop").style.display="flex";
    document.getElementById("categorymodal").style.display="flex";
});

document.getElementById("development").addEventListener("click",function(){
    document.getElementById("develop").style.display="none";
});
