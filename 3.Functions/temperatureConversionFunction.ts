// Goal : to write a functions for temperature conversions
// Input : temperature in foreinheit(number) 100
// output : converted temperature (number) 37.7

function celciusToForeinheit(num:number):number{
    let converted : number = (num*(9/5)+32);
    return converted;
}

let foreinheit : number = celciusToForeinheit(100);
console.log(foreinheit);

function ForeinheitTocelcius(num:number):number{
    let converted : number = (100-32)*(5/9);
    return converted;
}

let celcius : number = ForeinheitTocelcius(100);
console.log(celcius);