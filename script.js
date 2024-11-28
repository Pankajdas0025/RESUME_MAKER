function check()
{
    var demo=document.getElementById("Photo").value.replace(/.*(\/|\\)/,'');
    confirm("Your photo uloaded !");
    document.getElementById("Himg").src =demo;
    

}
function Sent(){
    var a=document.getElementById("name").value;
    var b=document.getElementById("num").value;
    var c=document.getElementById("email").value;
    var d=document.getElementById("git").value;
    var e=document.getElementById("lin").value;


    document.getElementById("Htittle").innerHTML=a;
    document.getElementById("n").innerHTML=b;
    document.getElementById("e").innerHTML=c;
    document.getElementById("g").innerHTML=d;
    document.getElementById("l").innerHTML=e;
    

   
}
function leninput(){

    
    var V=document.getElementById("lenInp").value;
    if(V==""){
        alert("please enter something !!");
    }
    var list=document.createElement("li");
    list.innerHTML=V;
    document.getElementById("len").appendChild(list);
    document.getElementById("lenInp").value="";

}
function Expinput(){

    
    var x=document.getElementById("ExpInp").value;
    if(x==""){
        alert("please enter something !!");
    }
    var list=document.createElement("li");
    list.innerHTML=x;
    document.getElementById("exp").appendChild(list);
    document.getElementById("ExpInp").value="";

}

function Hobinput(){

    
    var y=document.getElementById("HobInp").value;
    if(y==""){
        alert("please enter something !!");
    }
    var list=document.createElement("li");
    list.innerHTML=y;
    document.getElementById("Hob").appendChild(list);
    document.getElementById("HobInp").value="";

}


function about(){
    var s=document.getElementById("ab").value;
    if(s==""){
        alert("please enter something !!");
    }
   
    document.getElementById("AboutText").innerHTML=s;
   

}
function Eduinput(){

    
    var ed=document.getElementById("EduInp").value;
    if(ed==""){
        alert("please enter something !!");
    }
    var list=document.createElement("li");
    list.innerHTML=ed;
    document.getElementById("Edu").appendChild(list);
   document.getElementById("EduInp").value="";
}


function Expeinput(){
    var z=document.getElementById("ExpeInp").value;
    if(z==""){
        alert("please enter something !!");
    }
    var list=document.createElement("li");
    list.innerHTML=z;
    document.getElementById("Exp").appendChild(list);
    document.getElementById("ExpeInp").value="";
}
function Hardinput(){
    var h=document.getElementById("HardInp").value;
    if(h==""){
        alert("please enter something !!");
    }
    var list=document.createElement("li");
    list.innerHTML=h;
    document.getElementById("Hard").appendChild(list);
    document.getElementById("HardInp").value="";
}
function Make(){
    var a=document.getElementById("name").value;
    var b=document.getElementById("num").value;
    var c=document.getElementById("email").value;
    var d=document.getElementById("git").value;
    var e=document.getElementById("lin").value;
    // var V=document.getElementById("lenInp").value;
    // var x=document.getElementById("ExpInp").value;
    // var y=document.getElementById("HobInp").value;
    var s=document.getElementById("ab").value;
    // var ed=document.getElementById("EduInp").value;
    // var z=document.getElementById("ExpeInp").value;
    if(a==""||b==""||c==""||d==""||e==""||s=="")
    {
        alert("All field is required !!");
        return false;
    }


    confirm("You are sure to make you resume !");
    document.getElementById("k").style.display = "none";
    document.getElementById("j").style.display = "block";


}function printPage(){
  
   var btn=document.getElementById("Pbtn");
   btn.style.display="none";
   document.getElementById("Bbtn").style.display="none";
   window.print();
   document.getElementById("j").style.display = "none";
   document.getElementById("k").style.display = "block";


   }
   

function BPage(){
    document.getElementById("j").style.display = "none";
    document.getElementById("k").style.display = "block";
   
    
 }