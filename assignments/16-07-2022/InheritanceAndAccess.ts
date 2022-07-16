//0. FInd all other operators which perform overloading operations


// 1. Create a class called 'fan', assume your own data members, methods atleast 6 each and two private data members.
class fan{
    // create the data members of the class

    public brand : string;
    public numberOfWings : number;
    public speedLevels : number;
    public lifeSpan : number; // in years
    public numOfCapacitors : number;
    private coilUsed : string;

    // create a constructor : 

    constructor (brand:string,numberOfWings:number,speedLevels:number,lifeSpan:number,numOfCapacitors:number,coilUsed:string){
        this.brand = brand;
        this.numberOfWings = numberOfWings;
        this.speedLevels = speedLevels;
        this.brand;lifeSpan = lifeSpan;
        this.numOfCapacitors = numOfCapacitors;
    }

    private startFan(electricity:boolean){
        if(electricity){
            console.log("fan runs");
        }
        else{
            console.log("doesn't run");
        }

    }

    public changeLevel(currentLevel:number):number{
        currentLevel = currentLevel+1;
        return currentLevel;
    }

    public fanQualityCheck(){
        if (this.lifeSpan>2){
            console.log("good quality");
        }
        else{
            console.log("average quality");
        }
        
    }

}
// 2. Create a child class 'tableFan' from above 'fan'

class tableFan extends fan{
    public changeLevel(currentLevel: number): number {
        currentLevel = currentLevel+2;
        return currentLevel;
    }

}

// 3. Create a child class 'ceilingFan' from 'fan'

class ceilingFan extends fan{

}

// 4. Try to access private members from 'fan' in 'ceilingFan'. Is this allowed?

let fanObject = new fan('usha',3,3,1,2,'copper');
console.log(fanObject.brand);
let level = fanObject.changeLevel(3);
console.log(level);
fanObject.fanQualityCheck()

let tableFanObj = new tableFan('havells',4,4,3,4,'copper');
let levOftable = tableFanObj.changeLevel(4);
console.log(levOftable);

// ceilingFanObj.fanStart(true) : not possible to access the private methods and variables from the parent class