// usage of map() function

let array : number [] = [1,2,3,4,5]

let square = (a:number)=>{
    return a**2
}

let result = array.map(square)

console.log(result
    )

let isEven = (a:number)=>{
    if((a%2)==0){
        return true
    }
    else{
        return false
    }
}

let result2 = array.map(isEven)
console.log(result2)

let res3 = array.map((index,value)=>{
    return value*value*value
})

console.log(res3)

var employees = [  
    { id: 20, name: 'Ajay', salary:30000 },  
    { id: 24, name: 'Vijay', salary:35000 },  
    { id: 56, name: 'Rahul', salary:32000 },  
    { id: 88, name: 'Raman', salary:38000 }  
 ];

 let res4 = employees.map((index,value)=>{
    return index.name
 })

 console.log(res4)