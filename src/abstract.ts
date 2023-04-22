abstract class car{
    constructor(public name: string){

    }
    getName(): void{
        console.log(this.name)
    }

    abstract findMaxSpeed(params: number): void
}

class fullcar extends car{
    findMaxSpeed(params: number): void {
        console.log('max speed is ',params)
    }
}


let kia = new fullcar('sonet')

kia.findMaxSpeed(300)
kia.getName()