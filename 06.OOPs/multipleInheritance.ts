// Typescript and java does not support multiple inheritance 
/*
Reason :
    Consider a case where class B extends class A and Class C and both class A and C have the same method display().
    Now  compiler cannot decide, which display method it should inherit. To prevent such situation, multiple inheritances is not allowed .
*/
// To achieve multiple inheritance one can use the concept of interface
interface person{
    name : string,
    age : number,
    marks : number,
    calculateRank():string
}

class grade implements person{
    public name: string
    public age: number
    public marks: number
    constructor(name:string,age:number,marks:number){
        this.name = name
        this.age = age
        this.marks = marks
    }
    public calculateRank(): string {
        if(this.marks>90){
            return 'first class'
        }
        else if((this.marks>80) &&(this.marks<90)){
            return 'second class'
        }
        else{
            return 'third class'
        }
    }
}

let rank =  new grade('dinesh',23,95)

let output  = rank.calculateRank()
console.log(output)