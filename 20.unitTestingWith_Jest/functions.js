let functions = {
    add : (a,b)=> a+b,
    checkNull : ()=> null,
    checkFalsy : ()=> undefined,
    returnUser : ()=>{
        let user = {}
        user['firstName'] = 'dinesh'
        user['lastName'] = 'reddy'
        return user
    }
}

module.exports=functions