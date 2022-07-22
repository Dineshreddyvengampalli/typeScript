const is_completed:boolean = true
let value : number  = 10
function demo(){
    let promise = new Promise((resolve,reject)=>{
        if (is_completed){
            resolve(value)
        }
        else{
            reject('it is false')
        }
    })

    promise.then((message)=>{
        console.log(message+100)
    })
    promise.catch((message)=>{
        console.log(message)
        console.log("sorry")
    })
    promise.finally(()=>{
        console.log('this is from finally')
    })
}

demo()
console.log("this is from outside the function")