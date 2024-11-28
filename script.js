
  // =================Function to update the profile picture in the template ====================
  function check(input) {
    const a = document.getElementById('Himg');
    const file = input.files[0];
  
    if (file) {
      const reader = new FileReader();
  
      reader.onload = function (e) {
        a.src = e.target.result;
      };
  
      reader.readAsDataURL(file);
    }
  }
  // ==============================Function to update the profile picture ends here ====================





//  ============================================ function to fiels personal details
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



// ==========================================function to make resume===========================================================
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

// ==================================print page on window=======================================
}function printPage(){
  
   var btn=document.getElementById("Pbtn");
   btn.style.display="none";
   document.getElementById("Bbtn").style.display="none";
  window.print();
   document.getElementById("j").style.display = "none";
   document.getElementById("k").style.display = "block";


   }

// ==================================print page on mobile=======================================
   function MprintPage(){
  
    var btn=document.getElementById("Dbtn");
    btn.style.display="none";
    document.getElementById("Pbtn").style.display="none";
    document.getElementById("Bbtn").style.display="none";
    document.getElementById("Dbtn").style.display="none";
        // Select the element containing the resume template
        const element = document.getElementById("j");
      
        // the screen width to adjust PDF format dynamically
        const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
      
        // Generate the PDF from the element with custom options
        const options = {
          margin: [0, 0, 0, 0],
          filename: "Resume.pdf",
          image: { type: "jpeg", quality: 1 },
          html2canvas: { scale: 2 },
          jsPDF: { unit: "px", format: [1500, 1800], orientation: "portrait" } // Default size for larger screens
        };
      
        // Adjust format and orientation for smaller screens
        if (screenWidth <=500) {
          options.jsPDF.format = [1200,800]; //  the format for smaller screens
          options.jsPDF.orientation = "portrait"; //  the orientation for smaller screens
        }
      
        html2pdf().set(options).from(element).toContainer().toCanvas().toPdf().save();
        alert("Download successfull !");
      }


 


function BPage(){
    document.getElementById("j").style.display = "none";
    document.getElementById("k").style.display = "block";
   
    
 }