// 4.Get All users's ids who are using same 'apiKey'

const { count, Console } = require('console');
var jsonData = require('./data.json');

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
let getId = ()=>{
    let sampleData = []
    for(let i = 0;i<jsonData.length;i++){
        for(let j=i+1;j<jsonData.length;j++){
            if(jsonData[i].apiKey==jsonData[j].apiKey){
                sampleData.push(jsonData[i].id, jsonData[j].id)
                i++
                j++

            }
        }
    }
    return sampleData
}

let data = getId()
console.log(data)