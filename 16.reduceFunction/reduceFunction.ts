// reduce () function usecase

let array : number[] = [1,2,5,10,11]

let result:number = array.reduce((accumilator,currentValue)=>{
    return accumilator+currentValue
},0)

console.log(result)

let result2 = array.reduce((accumilator,previousValue)=>{
    return accumilator - previousValue
})

console.log(result2)