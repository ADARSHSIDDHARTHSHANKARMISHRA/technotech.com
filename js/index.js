function save(){
    let userName=document.getElementById("name").value;
    let userEmail=documnet.getElementById("email").value;
    let userAddress=document.getElementById("address").value;
    let userCity=document.getElementById("city").value;
    let userState=document.getElementById("state").value;
    let userZip=document.getElementById("pincode").value;
    if(userName==''){
        document.getElementById("errormessage").innerHTML="Name Can Not Be Blank.";
        document.getElementById("name").style.background="red";
    }else{
        document.getElementById("name").style.background="";
    }
}