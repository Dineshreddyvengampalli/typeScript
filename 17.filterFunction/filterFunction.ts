let array :number[] = [2,3,7,9,10]

let result  = array.filter((value)=>{
    if((value%2)==0){
        return value
    }
})

console.log(result)

let result2 = array.filter((value)=>{
    if(((value)%2)!=0){
        return value
    }
})

console.log(result2)

