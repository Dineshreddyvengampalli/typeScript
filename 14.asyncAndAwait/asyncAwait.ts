export{}
let a = ()=>{
    return 'iam a'
}

let b = async ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('iam from b')
        },2000)
        
    })
}

let c = ()=>{
    return 'iam c'
}

let callThis = async()=>{
    let fromA = a()
    console.log(fromA)
    let fromB = await b()
    console.log(fromB)
    let fromAnothe = await anotherFun(fromB)
    console.log(fromAnothe)
    let fromC = c()
    console.log(fromC)
}

callThis()
let anotherFun =async (sample:any) => {
    let promise = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(`iam from another ${sample}`)
        },5000)
    })
    return promise    

}