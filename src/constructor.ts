class family{
    constructor(public readonly name:string, public members:number){
    }
    getNumber():number{
        return this.members
    }
}

let pFamily = new family('Pulikanti',7)
console.log(pFamily.getNumber())

let aFamily: family = {members : 99 ,name : 'dinesh', getNumber : pFamily.getNumber}
console.log(aFamily.getNumber())

