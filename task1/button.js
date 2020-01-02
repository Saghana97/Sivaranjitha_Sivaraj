function border1(x)
{
    let len=document.getElementsByClassName("bt").length;
    for(i =0;i< len;i++){
        document.getElementsByClassName("bt")[i].style.borderBottom="none"
    }
    
    document.getElementsByClassName("bt")[x].style.borderBottom="6px solid  #007791";

}   