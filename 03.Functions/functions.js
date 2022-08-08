/*
    Goal : to understand the concept of functions
*/
/*
    Write a function to say whether a number is even or odd
    input : number
    output: yes/no
*/
function isEven(num) {
    if ((num % 2) == 0) {
        console.log("Given number is even");
    }
    else {
        console.log("given number is odd");
    }
}
isEven(100);
//function to check perfect number or not
// input : number
// output : yes if it's a perfect / no if it's not a perfect number
function isPerfect(num) {
    var sum = 0;
    for (var i = 0; i < num; i++) {
        var rem = num % i;
        if (rem == 0) {
            sum = sum + i;
        }
    }
    if (sum == num) {
        console.log("yes");
    }
    else {
        console.log("no");
    }
}
isPerfect(6);
//Goal : write a function to return reverse of a number 
// input : number (ex 123)
//output: number (ex 321)
function reverse(num) {
    var rev = 0;
    while (num > 0) {
        var rem = num % 10;
        rev = (rev * 10) + rem;
        num = Math.floor(num / 10);
    }
    return rev;
}
var result = reverse(987);
console.log(result);
