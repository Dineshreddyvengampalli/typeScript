/*
    Goal: To understand if condition
    To write a simple program to check wheter a number is perfect number or not.
    Input: number (integer)
    output: yes if number is perfect.
            no if number is not a perfect number.
*/
var num;
num = 6;
var sum = 0;
for (var i = 1; i < num; i++) {
    var rem = num % i;
    if (rem == 0) {
        sum = sum + i;
    }
}
if (sum == num) {
    console.log("its a perfect number");
}
else {
    console.log("its not a perfect number");
}
