let numArray:Array<number> = [1,2,3,4]

let order = (value:number)=>{
    let promise = new Promise((resolve,reject)=>{
        for(let i=0;i<numArray.length;i++){
            if(numArray[i]==value){
                resolve(value)
            }
            else{
                reject(value)
            }
        }

    })
    promise.then((message)=>{
        console.log(`the number ${message} is present in the array`)
    })
    promise.catch((message)=>{
        console.log("number is absent ")
    })

}

order(4)

console.log("these are executing parallely")