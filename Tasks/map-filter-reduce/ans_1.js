// 1.Get all unique users based on their email id.

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


//  let recentUsers = reduceUsers.map((value,index)=>{
//     let users = reduceUsers.filter((data)=>{
//         if ((data.updatedAt)> value.updatedAt){
//             return data
//         }
//     })
//     return users
//  })

// console.log(ans)

let sampleData = jsonData

let emails = sampleData.map((value,index)=>{
    return value.email
})

let repeatedEmails = emails.filter((value,index,self)=>{
    return (self.indexOf(value) !== index)
})

let repeatEmailsFiltered = repeatedEmails.filter((value,index,self)=>{
    return (self.indexOf(value) === index)
})

let repeatedUsers = repeatEmailsFiltered.map((value,index)=>{
    let user = sampleData.filter((data)=>{
        return data.email === value
    })
    return user
})

let reduceUsers = repeatedUsers.reduce((a,b)=>{
    return a.concat(b)
      
},[])

let recentData = []

for(let i=0;i<reduceUsers.length;i++){
    for(j=i+1;j<reduceUsers.length;j++){
        if(reduceUsers[i].email == reduceUsers[j].email){
            if(reduceUsers[i].updatedAt>reduceUsers[j].updatedAt){
                recentData.push(reduceUsers[i])
            }
            else{
                recentData.push(reduceUsers[j])
            }
        }
    }
}

let deleteIds = recentData.map((data)=>{
    return data.id
})

for(let i=0;i<sampleData.length;i++){
    for(j=0;j<deleteIds.length;j++){
       if((sampleData[i].id) == deleteIds[j]){
        data = sampleData.splice(i,1)

    
       }
    }
}



// let recentData = reduceUsers.map((value,index)=>{
//     let ans = {}
//     ans[index] = {value}
//     return ans
// })
console.log(sampleData.length)
console.log(jsonData.length)
console.log(data)
console.log(recentData)