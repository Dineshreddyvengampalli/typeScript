import fetch from 'node-fetch'

fetch('./data.json').then((res)=>{
    console.log(res)
})