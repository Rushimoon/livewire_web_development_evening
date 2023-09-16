
async function submited(){
  
  
   try{
    
    let mydata= await fetch(`https://www.omdbapi.com/?s=tamasha&apikey=82dd9e8`)

    // console.log(mydata)
    let finaldata= await mydata.json(); 
   console.log(finaldata.Search)   
 
  
     }
     catch{
        console.log("eror")
     }

}
 submited()
 //https://www.omdbapi.com/?s=marvel&apikey=82dd9e8




