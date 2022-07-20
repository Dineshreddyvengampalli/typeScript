export {}
function personDecorator(constructor:Function){
    console.log(constructor)
    console.log("this is the decorator")
    constructor.prototype.date = new Date()
}
// decorator can access the constructor even before creating obj of the class
// we can inject data to the constructor(to the class) even before creating the object 

@personDecorator // decorator expression
class person{

    constructor(public personName:string){
        this.personName = personName
        console.log("this is the constructor in class")
    }
    public displayName(){
        console.log(this.personName)
    }
}
@personDecorator
class vehicle{}

const personObj = new person("dinesh")
personObj.displayName()
console.log((<any>personObj).date)
const vehicleObj = new vehicle()
console.log((<any>vehicleObj).date)

