let  button=document.getElementById("btn");
   button.addEventListener('click',submited)
   



async function submited(){
   let inputbox=document.getElementById("input").value ;
    
  
   try{
    
    let mydata= await fetch(`https://www.omdbapi.com/?s=${inputbox}&apikey=82dd9e8`)

    // console.log(mydata)
    let finaldata= await mydata.json(); 
 display(finaldata.Search)   
 
  
     }
     catch{
        console.log("eror")
     }

}
 
 //https://www.omdbapi.com/?s=marvel&apikey=82dd9e8


function display(data){

   data.forEach(element => {
      
   });
}

