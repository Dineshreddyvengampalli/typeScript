// Implement abstraction in typescript

// creation of abstract class
abstract class vehicle{
    public name : string
    constructor(name:string){
        this.name = name
    }

    // creation of abstruct method
    abstract start();// hiding the implementation of method start
    public turnLeft(){
        console.log(`${this.name} turn left`)
    }
    public stop(){
        console.log(`${this.name} stop`)
    }
}
class car extends vehicle{
    // implementation of abstruct method
    start() {
        console.log(`${this.name} start`)
    }
    public turnRight(){
        console.log(`${this.name} turnright`)
    }
}

// creation of the object of derieved class
// we cannot create object of the abstruct class
let bmw = new car('bmw')
// call the methods in the derieved class
bmw.start()
bmw.stop()
bmw.turnRight()
bmw.turnLeft()
