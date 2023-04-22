class human {
    constructor(public name:string){
    }
    getName(){
        console.log(this.name + 'is my name')
    }
}


class people extends human{
    constructor(public name: string){
        super(name) // calls the base class constructor
    }
    getName = ()=>{
        console.log('this is modified method')
    }
}

let iam = new people('dinesh')
iam.getName()