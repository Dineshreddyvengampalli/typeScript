/* 
    Goal : to understand the concept of functions
*/
/*
    Write a function to say whether a number is even or odd
    input : number
    output: yes/no
*/
export{}
function isEven(num:number){
    if((num%2)==0){
        console.log("Given number is even")
    }
    else{
        console.log("given number is odd")
    }
}

isEven(100);

//function to check perfect number or not
// input : number
// output : yes if it's a perfect / no if it's not a perfect number

function isPerfect(num:number){
    let sum:number = 0;
    for(let i:number = 0;i<num;i++){
        let rem:number = num % i;
        if(rem == 0){
            sum = sum + i;
        }
    }
    if(sum == num){
        console.log("yes");
    }
    else{
        console.log("no");
    }
}
isPerfect(6);

//Goal : write a function to return reverse of a number 
// input : number (ex 123)
//output: number (ex 321)

function reverse(num:number) :number{
    let rev:number = 0;
    while (num>0){
        let rem:number = num % 10;
        rev = (rev *10) + rem;
        num = Math.floor(num/10); 
    }
    return rev;
}

let result:number = reverse(987);
console.log(result);