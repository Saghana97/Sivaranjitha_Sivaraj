var x= document.getElementById("ip");
var y=0;
document.getElementById("next").addEventListener("click",function(){
    y=-(parseInt(x.value)+220);
    if(y*-1<=1000){
        console.log(y)
        document.getElementById("scroll1").style.transform="translateX("+y+"px)";
        x.value=-y;
    }
});
var a= document.getElementById("ip");
var b=0;
document.getElementById("prev").addEventListener("click",function(){
    b=-(parseInt(a.value)-220);
    if(b<=0){
        console.log(b)
        document.getElementById("scroll1").style.transform="translateX("+b+"px)";
        a.value=-b;
    }
});