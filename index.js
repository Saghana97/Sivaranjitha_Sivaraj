var x= document.getElementById("ip");
var y=0;
document.getElementById("next").addEventListener("click",function(){
    y=-(parseInt(x.value)+640);
    if(y*-1<=2000){
        document.getElementById("scroll1").style.transform="translateX("+y+"px)";
        x.value=-y;
    }
});
var a= document.getElementById("ip");
var b=0;
document.getElementById("prev").addEventListener("click",function(){
    b=-(parseInt(a.value)-640);
    if(b<=0){
        document.getElementById("scroll1").style.transform="translateX("+b+"px)";
        a.value=-b;
    }
});