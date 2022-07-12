// Function with optional parameters

function add(num1:number,num2?:number){
    if(num2){
        return num1+num2;
    }
    else{
        return num1;
    }
}

let a = add(5,10);
console.log(a);
let b = add(10);
console.log(b);

// function with default parameters

function fullName(name:string,lastName:string = 'Reddy'):string{
    return name+lastName;
}
let myName:string = fullName('dinesh');
console.log(myName);