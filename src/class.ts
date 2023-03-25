class person {
    private name : string;
    private doy : number;
    constructor(name : string,doy:number){
        this.name = name;
        this.doy = doy
    }
    public readonly calcAge = ():number=>{
        let currentYear: number = new Date().getFullYear()
        return currentYear - this.doy
    }
}

let me  = new person('dinesh',2000)

console.log(me.calcAge())