import Emp, { printId, printName, printSal } from "./homeone.js";
printName
printSal
printId
var emp1 = new Emp("xyz", 4565, 45000)
console.log(emp1)

printName(emp1)
printSal(emp1)
printId(emp1)

//Template literals
var x = 23
var y = 34
var sum = x + y

console.log("The sum of "+x+" and "+y+" is "+sum);
console.log(`The sum of ${x} and ${y} is ${sum}`);


//callback hell
var h1 = document.querySelector("h1")
var h2 = document.querySelector("h2")
var h3 = document.querySelector("h3")
var btn = document.querySelector("button")
btn.addEventListener("click", ()=>{
    setTimeout(()=>{
        setTimeout(()=>{
            setTimeout(()=>{
                h3.style.color = "green"
            },5000)
            h2.style.color = "blue"
        },4000)
        h1.style.color = "red"
    },3000) 
})


//Promise -success/failure/pending

let pro = new Promise((resolve, reject) =>{
    var x = 5
    if(x == 2){
        resolve("success")
    }else{
        reject("failure")
    }
})
pro.then((message)=>{
    console.log("This is inside then block " + message);  //will execute if resolve is true
}).catch((message)=>{
    console.log("This is inside catch block " + message); //will execute if reject case is true
}).finally(()=>{
    console.log("This will execute in all cases");
})