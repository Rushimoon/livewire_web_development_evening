


 async function putdata(){
    let form =document.getElementById("lform");
    event.preventDefault();
    
 let name=document.getElementById("name").value
let pass=document.getElementById("email").value

let obj={
    name,
    pass
}



await fetch(`  =`,{
    method:"POST",
    body:JSON.stringify(obj),
    headers:{
        "Content-Type":"application/json"
    }
    
})


 }