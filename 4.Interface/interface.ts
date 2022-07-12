
// interface structure definition
interface person{
    firstname:string,
    lastname : string,
    phnumber? : number,
    address? : string
}
// using interface as function parameter type

function fullName(input:person){
    console.log(input.firstname + input.lastname);
}
// Declaring object in interface structure
let obj = {
    firstname:"dinesh",
    lastname : "Reddy"
};

fullName(obj);
