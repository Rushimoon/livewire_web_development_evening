
let x=10;


try {
    console.log("inside try")
    if(x < 5) throw "too low";
    if(x > 10) throw "very high";
  }
  catch(err) {
    console.log(err)
  }
  finally{
    console.log("inside fina")
  }