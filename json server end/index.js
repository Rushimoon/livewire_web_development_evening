let loginForm=document.getElementById("login_form");
loginForm.addEventListener("submit",putdata)
const baseUrl=`http://localhost:3000`;

async function getdata(){
    let data=await fetch(`${baseUrl}`)
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

await fetch(`${baseUrl}/userData`,{
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
    await fetch(`${baseUrl}/${id}`,{
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

   await fetch(`${baseUrl}/${uid}`,{
    method:"PATCH",
       body:JSON.stringify(obj),
       headers:{
           "Content-Type":"application/json"
       }
})
}
 async function filter(){
    let cri=document.getElementById("select").value
    let data=document.getElementById("filterInp").value
    console.log(cri,data)
    let sdata= await fetch(`${baseUrl}/Search?${cri}=${data}`)
    let finalSdata= await sdata.json();
   display(finalSdata)
}


async function paginate(num){
   console.log(num)
   let sdata= await fetch(`${baseUrl}/Search?_page=${num}&_limit=2`)
   let finalSdata= await sdata.json();
   display(finalSdata)


}
let container=document.getElementById("container");
function display(data){
    container.innerHTML="";
    data.forEach(function(el){
    
  
       let card = document.createElement("div");
           card.setAttribute("id","carddiv");
       let title= document.createElement("h1");
           title.innerText="Movie nmae -"+el.Title;
      
           let type= document.createElement("h1");
           type.innerText="Type -"+ el.Type;
          
           let Poster= document.createElement("img");
           Poster.src=el.Poster;
           Poster.setAttribute("class","Pimg")
           card.append(Poster,title,type);
     
          container.append(card)
       // console.log(el)
      })
 }


