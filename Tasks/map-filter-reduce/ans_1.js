// 1.Get all unique users based on their email id.


const { count, Console } = require('console');
const { json } = require('stream/consumers');
var jsonData = require('./sample.json');

// let emails = jsonData.map((user,index)=>{
//     let data = {}
//     data[index]=user.email
//     return data
// })

// console.log(emails)


// var jsonData = require('./sample.json');
// let reqData = []
// for(let i=0;i<jsonData.length;i++)
// {
//     for(let j=i+1;j<jsonData.length;j++)
//     {
//         if(jsonData[i].email==jsonData[j].email)
//         {
//             if(jsonData[i].updatedAt>jsonData[j].updatedAt)
//             {
//                 reqData.push(jsonData[i])
//                 i++
//                 j++
                
                
//             }
//             else
//             {
//                 reqData.push(jsonData[j])
//                 j++
//                 i++
                
//             }
           
//         }
//         // else{
//         //     reqData.push(jsonData[i])
//         //     i++
            
//         // }
        
        

//     }
// }

// console.log(reqData)
// console.log(jsonData.length)
// console.log(reqData.length)


let emails = jsonData.map((value,index)=>{
    return value.email
})

let repeatedEmails = jsonData.filter((value,index,self)=>{
    return (self.indexOf(value) !== index)
})

let uniqueUsers = jsonData.map((value,index)=>{
    if((value.email==repeatedEmails)){
    }
})

console.log(repeatedEmails)