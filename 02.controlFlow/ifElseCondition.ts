/*
    Goal: To understand if condition
    To write a simple program to check wheter a number is perfect number or not.
    Input: number (integer)
    output: yes if number is perfect.
            no if number is not a perfect number.
*/
export {}
let num:number;
num = 6;
let sum:number = 0;

for(let i:number = 1;i<num;i++){
    let rem:number = num % i;
    if(rem == 0){
        sum = sum+i;
    }
}
if(sum == num){
    console.log('yes');
}
else{
    console.log("no");
}