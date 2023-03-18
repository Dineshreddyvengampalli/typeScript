import axios, { AxiosResponse } from "axios";


async function getData() {
    let data:AxiosResponse = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
   return data
}


async function getD() {
    let data:AxiosResponse = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
   return data
}


let d =  Promise.allSettled([getData(),getD()]).then((data)=>{
    return data
})

d.then((data)=>{
    console.log(data)
})


// arraw functions
let a = (num1: number): void=>{
    console.log(num1)
}

a(3)
// spread operator
let arr : number[] = [1,2,3,4]
let copy = [...arr]
console.log(copy)
copy.push(...arr)
console.log(copy)

let obj = {
    name : 'dinesh',
    age : 23
}

const copyObj = {
    ...obj,
    role : 'backend'
}

console.log(copyObj)

// rest perameters

const addNum = (...numbers:number[]):number=>{
    let sum:number = 0
    for(let i=0;i<=numbers.length;i++){
        sum+=i
    }
    return sum
}

let res = addNum(1,2,3,4)
console.log(res)