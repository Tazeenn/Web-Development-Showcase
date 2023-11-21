class Emp{
    constructor(name, id, sal){
        this.name = name
        this.id = id
        this.sal = sal
    }
}

function printName(empname){
    console.log(`The fullname of the employee is ${empname.name}`)
}

function printSal(empsal){
    console.log(`The salary of the employee is ${empsal.sal}`)
}

export function printId(empid){                       //using export directly (not recommended)
    console.log(`The Id of the employee is ${empid.id}`)
}

export default Emp
export {printName, printSal}


//class constructor exported using default keyword
//named constructor using function name