export class calculator{
    public add(a:number,...n):number{
        let sum = a
        for(let i = 0;i<(n.length);i++){
            sum = sum + n[i]
        }
        return sum
    }
    public sub(a:number,b:number): number{
        return a-b
    }
    public multiply(a:number,...n){
        let res = a
        for (let i=0;i<n.length;i++){
            res = res*n[i]
        }
        return res
    }
    public divide(a:number,b:number){
        return (a/b)
    }
}   

const calc = new calculator()
let addRes:number = calc.add(10,10,10)
//console.log(addRes)