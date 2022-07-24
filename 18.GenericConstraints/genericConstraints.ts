type name ={
    firstName : string
}

let details = {
    lastname : 'vengampalli',
    firstName : 'dinesh'
}


function getName<T extends name>(naame:T){
    return naame
}

console.log(getName(details))

//**********************************************

var employees = { 
    id: 20, 
    name: 'Ajay', 
    salary:30000
 }

 function getData<o extends Object,k extends keyof o> (obj : o,key :k){
    return obj[key]

 }

 console.log(getData(employees,'name'))