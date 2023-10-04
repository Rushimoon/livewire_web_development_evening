let loginForm=document.getElementById("login_form");
loginForm.addEventListener("submit",putdata)
const baseUrl=`http://localhost:2003`;

async function getdata(){
    let data=await fetch(`http://localhost:2003/userData`)
    let actualdata=await data.json();
    console.log(actualdata)
}




async function putdata(){
    console.log("inside ")
    event.preventDefault();
 let name=loginForm.name.value;
 let email=loginForm.email.value;
 let pass=loginForm.pass.value;
 let mobile=loginForm.mobile.value


let obj={
    name,
    email,
    pass,
    mobile
}

await fetch(`http://localhost:2003/userData`,{
     method:"POST",
        body:JSON.stringify(obj),
        headers:{
            "Content-Type":"application/json"
        }
})
}


async function deldata()
{
    event.preventDefault();
    let id=document.getElementById('itemid').value
    console.log(id)
    await fetch(`http://localhost:2003/userData/${id}`,{
        method:"DELETE"
         
   }) 

}


async function updateData(){
   event.preventDefault();
   let updateForm=document.getElementById("update_form");
   let uid=updateForm.uid.value;
   let name=updateForm.name.value;
    let email=updateForm.email.value;
    let pass=updateForm.pass.value;
    let mobile=updateForm.mobile.value
   
   
   let obj={
       name,
       email,
       pass,
       mobile
   }

   await fetch(`http://localhost:2003/userData/${uid}`,{
    method:"PATCH",
       body:JSON.stringify(obj),
       headers:{
           "Content-Type":"application/json"
       }
})
}