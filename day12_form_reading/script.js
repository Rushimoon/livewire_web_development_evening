let sform=document.getElementById("sform");
 sform.addEventListener("submit",showdata);

 function showdata(){
    event.preventDefault();
  let name=document.getElementById("name").value;
  let lname=document.getElementById("lname").value;
  let mobile=document.getElementById("mobile").value;
  let gender=document.getElementById("gender").value;
  let email=document.getElementById("email").value;
  console.log(name,lname,mobile,gender,email);


 }