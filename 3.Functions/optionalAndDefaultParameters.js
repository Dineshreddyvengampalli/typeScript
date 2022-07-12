// Function with optional parameters
function add(num1, num2) {
    if (num2) {
        return num1 + num2;
    }
    else {
        return num1;
    }
}
var a = add(5, 10);
console.log(a);
var b = add(10);
console.log(b);
// function with default parameters
function fullName(name, lastName) {
    if (lastName === void 0) { lastName = 'Reddy'; }
    return name + lastName;
}
var myName = fullName('dinesh');
console.log(myName);
