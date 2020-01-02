function check(){
    // console.log("checked");
    // var e= document.getElementById("lists");
    // var i=0;
    // while(e.hasChildNodes())
    // {    
    //     i++;
    // }
    // while(i>=2)
    // {
    //     e.removeChild(e.firstChild);
    // }
    var e= document.getElementById("lists");
    var i=0;
    while(e.hasChildNodes())
    {
        i++;
        if(i>2)
        {
            e.removeChild(e.firstChild);
        }
    }

}