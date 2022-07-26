import fetch from 'node-fetch'
let data = {
    name : 'dinesh',
    job : 'entreprenuer'
}
async function postData() {
    let response = await fetch('https://reqres.in/api/users',{
        method : 'POST',
        body  :JSON.stringify(data),
        headers :{
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    let data = await response.json()
    return data
}

async function call() {
     let res = await postData()
     console.log(res)
}

call()