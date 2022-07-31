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
    dataFetch : async()=>{
        let data = await fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then((data)=>{
            return data
        })
        .catch((error)=>{
            return error
        })
    }
}

module.exports=functions