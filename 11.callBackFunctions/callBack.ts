// callback implementation using arrow functions

let normalFunction = (callback)=>{
    console.log("this is normal function")
    callback()
}

let callbackFunction = ()=>{
    console.log("this is a callback function")
}

normalFunction(callbackFunction)

// callback implementation using function keyword

function a(b:Function){
    console.log('inside function a ')
    b()
}

function c(){
    console.log('inside callback function')
}

a(c)

// callback function with parameters

function sampleFunction(callBack:Function,param1:number,param2:number){
    console.log("inside a sample function")
    callBack(param1,param2)
}

function sub(a:number,b:number){
    console.log(`result from sub : ${a-b}`)
}

sampleFunction(sub,5,3)
