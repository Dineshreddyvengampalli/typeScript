function vehicleDecorator(country:string){
    return function(constructor:Function){
        constructor.prototype.place = country
    }

}

function ageDecorator(age : number){
    return function(constructor:Function){
        constructor.prototype.age = age
    }
}

@vehicleDecorator("India")
@ageDecorator(10)
class vehicle {
    constructor(public type:string){
        this.type = type
    }
    public display(){
        console.log(this.type)
    }
}

@ageDecorator(23)
class person {

    constructor(public name:string){
        this.name = name
    }

}
// creating the instances to the classes
const vehicleObj = new vehicle('suv')
const personObj = new person('dinesh')

console.log(` car location : ${(<any>vehicleObj).place}`)
console.log(`vehicle age : ${(<any>vehicleObj).age}`)
console.log(`person's age : ${(<any>personObj).age}`)
