import { calculator } from "./mainModule";
const calculatorObj = new calculator()
 function findMean(a:number,...n){
    let sum = calculatorObj.add(a,...n)
    let denominator = (n.length)+1
    let mean = sum/denominator
    return mean
 }
 
 function standardDeviation(numList:number[]){
     let n = numList.length
     let sum =0
     for(let i=0;i<n;i++){
         sum = sum+numList[i]
        }
        let mean = sum/n
        let numerator:number = 0
        for(let i=0;i<n;i++){
            numerator  = numerator + (numList[i]-mean)**2
        }
        let standardDeviation = Math.sqrt(numerator/n)
        return standardDeviation
    }
    
let mean = findMean(4,4,4,4)
console.log(`mean : ${mean}`)
let ans = standardDeviation([1,2,3,4])
console.log(`standard deviation : ${ans}`)