import fetch from "node-fetch";

// let getData = ()=>{
//     fetch('http://jsonplaceholder.typicode.com/users').then((message)=>{
//     return message.json().then((mes)=>{
//         console.log(mes)
//     })
// })
// }

async function getData(){
        try{
            let response = await fetch('https://www.nseindia.com/api/option-chain-indices?symbol=NIFTY')

            return response
        }
        catch(err){
            console.log("this is from catch")
            console.log(err)
        }
 
}


async function call() {

    let result = await getData()
    console.log(result)

}

call()

console.log('hai')