let fetch = require('node-fetch')
let functions = {
    add : (a,b)=> a+b,
    checkNull : ()=> null,
    checkFalsy : ()=> undefined,
    returnUser : ()=>{
        let user = {}
        user['firstName'] = 'dinesh'
        user['lastName'] = 'reddy'
        return user
    },
    // dataFetch : async()=>{
    //     let data = await fetch('https://jsonplaceholder.typicode.com/posts/1')
    //     .then((data)=>{
    //         return data
    //     })
    //     .catch((error)=>{
    //         return error
    //     })
    // },
    recverseArr : (arr)=>{
        let revArr = []
        for(let i=arr.length-1;i>=0;i--){
            revArr.push(arr[i])
        }
        return revArr
    },
    
}


let object = {
    sum : (a,b)=>a+b
}

module.exports = functions