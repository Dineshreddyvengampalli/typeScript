

class animal{
    // declare the members of the class 
    public numOfLegs : number;
    public weight : number;
    public colour : string;
    public name : string;
    // public setName(nme:string){
    //     this.name = nme;
    // }

    public constructor(numOfLegs:number,weight:number,colour:string,nme:string){
        this.numOfLegs = numOfLegs;
        this.weight = weight;
        this.colour = colour;
        this.name = nme;
    }

    public walk(){
        console.log(`Iam ${this.name} and iam walking stright`);
    }
}

class dog extends animal{
}

class cat extends dog{

}

let dogobj = new dog(4,30,'black','snoopy');
dogobj.walk();
let catobj = new cat(4,10,'white','huddle');
catobj.walk();
