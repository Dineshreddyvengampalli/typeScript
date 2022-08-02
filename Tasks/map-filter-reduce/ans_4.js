// 4.Get All users's ids who are using same 'apiKey'

const { some } = require('async');
const { count, Console } = require('console');
var jsonData = require('./sample.json');


let keys = jsonData.map((value,index)=>{
    return value.apiKey
})

let repeatedKeys = keys.filter((value,index,self)=>{
    return self.indexOf(value) !== index
})

let repeatedKeysFilter = repeatedKeys.filter((value,index,self)=>{
    return self.indexOf(value) === index
})

// let usersWithSameIds = jsonData.filter((value,index)=>{
//     for(let i of repeatedKeysFilter){
//         if(i==value.apiKey){
//             return value.apiKey
//         }
//     }
// })
// let idsWithSameKeys = usersWithSameIds.map((data)=>{
//     return data.id
// })


let usersWithSameIds = repeatedKeys.map((value,index)=>{
    let fake = jsonData.filter((data)=>{
        return data.apiKey === value
    })
    return fake
})


let reduceUsers = usersWithSameIds.reduce((a,b)=>{
   return a.concat(b)
     
},[])

let idsWithSameKeys = reduceUsers.map((data)=>{
    return data.id
    
})

let finalAns = idsWithSameKeys.filter((value,index,self)=>{
    return self.indexOf(value) === index
})

// console.log(repeatedKeysFilter)
// console.log(usersWithSameIds)

console.log(finalAns)
