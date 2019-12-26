// var x= document.getElementById("ip");
if (!localStorage.getItem('x'));{
    localStorage.setItem('x',0);
}
var x = localStorage.getItem('x');
var y=0;
document.getElementById("next").addEventListener("click",function(){
    y=-(parseInt(x)+640);
    if(y*-1<=2000){
        document.getElementById("scroll1").style.transform="translateX("+y+"px)";
        x=-y;
        localStorage.setItem('x',x);
    }
});
// var a= document.getElementById("ip");
// var a = x;
var b=0;
document.getElementById("prev").addEventListener("click",function(){
    var a = localStorage.getItem('x');
    b=-(parseInt(a)-640);
    if(b<=0){
        document.getElementById("scroll1").style.transform="translateX("+b+"px)";
        a=-b;
        localStorage.setItem('x',a);
    }
});