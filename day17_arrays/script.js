
 //     0 1 2 3 4  5
let a =[2,3,5,2,8,"rushi"];
console.log(a[5])
//push()->adds element at the end of arr
a.push("moon");
a.push("qweqe");
console.log(a);
//pop()->removes the element from end of arr
a.pop();
console.log(a);
//shift()->removes the element from start of arr
a.shift();
a.shift();

console.log(a);
//unshift()->adds the element at the start of arr
a.unshift("livewire");
a.unshift("liv");
console.log(a);
let names=["rutuja","rutuja","jagruti","jagruti","rutuja","jagruti","rutuja","jagruti","rutuja","jagruti","rutuja","jagruti","rutuja","jagruti","rutuja","jagruti","rutuja","jagruti","rutuja","jagruti","rutuja","jagruti","rutuja","jagruti","rutuja","jagruti","rutuja","jagruti","rutuja","jagruti","rutuja","jagruti","rutuja","jagruti","rutuja","jagruti","rutuja","jagruti"]

let lenOfArr=names.length;
console.log(lenOfArr)
console.log(names.toString());
console.log(names.join("*/*"))
delete a[4];
let combine=a.concat(names);
console.log(combine)

//arr.flat()
const myArr = [[1,2],[3,4],[5,6]];
const newArr = myArr.flat();
console.log(newArr)
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.splice(2, 2, "rutuja","jagruti","qwerwq");
// console.log(fruits)

 let fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(2);
console.log(citrus)
console.log(fruits)