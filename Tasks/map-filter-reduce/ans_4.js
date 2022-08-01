// 4.Get All users's ids who are using same 'apiKey'

const { count, Console } = require('console');
var jsonData = require('./sample.json');

// let getId = ()=>{
//     let sampleData = []
//     for (let i=0;i<jsonData.length;i++){
//         for(let j=i+1;j<jsonData.length;j++){
//             if(jsonData[i].apiKey!=jsonData[j].apiKey){
//                 sampleData.push[jsonData[i]]
//                 i = i+1
//                 j = j+1
//             }
//         }

//     }
//     return sampleData
// }
// let data = getId()
// console.log(data)
// let getId = ()=>{
//     let sampleData = []
//     for(let i = 0;i<jsonData.length;i++){
//         for(let j=i+1;j<jsonData.length;j++){
//             if(jsonData[i].apiKey==jsonData[j].apiKey){
//                 sampleData.push(jsonData[i].id, jsonData[j].id)
//                 i++
//                 j++

//             }
//         }
//     }
//     return sampleData
// }

// let data = getId()
// console.log(data)

// userIds = jsonData.map((data)=>{
//     return data.id
// })
// let keys = jsonData.map((data)=>{
//     return data.apiKey
// })
// reqUserIds = []
// for(let i=0;i<keys.length;i++){
//     for(let j=i+1;j<keys.length;j++){
//         if(keys[i]==keys[j]){
//             // reqUserIds.push[(userIds[i],userIds[j])]
//             // console.log(userIds[i])
//             // reqUserIds[userIds[i]] = [(userIds[j])]
//             reqUserIds.push(userIds[i],userIds[j])

//         }
//     }
// }
// // console.log(userIds)

// // console.log(keys)

// console.log(reqUserIds)

// let reqUserIds = jsonData.filter((data)=>{
//     let allUserids = []
//     allUserids.push(data.id)
//     let allApiKeys = []
//     allApiKeys.push(data.apiKey)
//     return 
// })

let keys = jsonData.map((data)=>{
    return data.apiKey
})
// console.log(keys)

let multipleKey = keys.filter((value, index, self) => {
    // console.log(self)
    return (self.indexOf(value) !== index)
 
})

// console.log(keys.length)
/// console.log(jsonData.apiKey in multipleKey)
console.log(multipleKey)
let lis =[]
for(let i=0;i<jsonData.length;i++){
    for(let j=0;j<multipleKey.length;j++){
        if(multipleKey[j]==jsonData[i].apiKey){
            lis.push(jsonData[i].id)
            break
        }
    }
}
console.log(lis)
// reqData = jsonData.filter((value, index, self) => {
//     console.log(self)
//     return self.indexOf(value) === index
//   })

