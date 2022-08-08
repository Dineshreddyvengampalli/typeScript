// Goal : to write a functions for temperature conversions
// Input : temperature in foreinheit(number) 100
// output : converted temperature (number) 37.7
function celciusToForeinheit(num) {
    var converted = (num * (9 / 5) + 32);
    return converted;
}
var foreinheit = celciusToForeinheit(100);
console.log(foreinheit);
function ForeinheitTocelcius(num) {
    var converted = (100 - 32) * (5 / 9);
    return converted;
}
var celcius = ForeinheitTocelcius(100);
console.log(celcius);
