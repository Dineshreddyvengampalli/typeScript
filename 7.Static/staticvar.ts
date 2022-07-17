// understanding static variables

class stic{
    static expVar = 0;
    public increment(){
    stic.expVar++
    }
}

let obj = new stic()    
let obj2 = new stic()   // expVar is not created again and acts as global
obj.increment() // increased by one 
console.log(stic.expVar) // logs '1'
obj2.increment() // increased by one 
console.log(stic.expVar) // logs 2
