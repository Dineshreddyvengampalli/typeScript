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
let obj3 = new stic()
obj3.increment()
console.log(stic.expVar)

// ***************************************************************
class InstanceSample{
    public  instance  = 0;
    public test(){
    this.instance++
    }
}
let objSample = new InstanceSample()    
let obj2Sample = new InstanceSample()   // expVar is not created again and acts as global
objSample.test() // increased by one 
console.log(objSample.instance) // logs '1'
obj2Sample.test() // increased by one 
console.log(obj2Sample.instance)
