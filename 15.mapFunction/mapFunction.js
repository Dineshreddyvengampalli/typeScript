// usage of map() function
var array = [1, 2, 3, 4, 5];
var square = function (a) {
    return Math.pow(a, 2);
};
var result = array.map(square);
console.log(result);
var isEven = function (a) {
    if ((a % 2) == 0) {
        return true;
    }
    else {
        return false;
    }
};
var result2 = array.map(isEven);
console.log(result2);
var res3 = array.map(function (index, value) {
    return value * value * value;
});
console.log(res3);
var employees = [
    { id: 20, name: 'Ajay', salary: 30000 },
    { id: 24, name: 'Vijay', salary: 35000 },
    { id: 56, name: 'Rahul', salary: 32000 },
    { id: 88, name: 'Raman', salary: 38000 }
];
var res4 = employees.map(function (index, value) {
    return index.name;
});
console.log(res4);
