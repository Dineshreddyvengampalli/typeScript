// 1.Get all unique users based on their email id.


const { count, Console } = require('console');
var jsonData = require('./data.json');

let getData = ()=>{
    let sameData = []
    for (let i = 0;i<jsonData.length;i++){
        for(let j=i+1;j<jsonData.length;j++){
            if(jsonData[i].email==jsonData[j].email){
                sameData.push(jsonData[i])
                sameData.push(jsonData[j])
                i++
                j++
            }
        }
    }
    return sameData
    
}

let data = getData()
console.log(data)