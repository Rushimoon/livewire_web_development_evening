console.log(this)

let emp1={
    name:"rutuja",
    age:65,
    salary:50000,
    printfullName:function(){
    //  console.log(this.name+" "+this.age);
     console.log(this)
     alert(this.name+" " +this.age+" "+this.salary )
    }
};
let emp2={
    name:"jagruti",
    age:66,
    salary:40000
};
emp1["age"]=25;
emp2.name="kahnwani";

console.log(emp1);
console.log(emp2);
// emp1.printfullName()

function buttonClicked(){

alert("button is cliocked")

}