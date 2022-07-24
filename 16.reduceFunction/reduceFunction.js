// reduce () function usecase
var array = [1, 2, 5, 10, 11];
var result = array.reduce(function (accumilator, currentValue) {
    return accumilator + currentValue;
}, 0);
console.log(result);
var result2 = array.reduce(function (accumilator, previousValue) {
    return accumilator - previousValue;
});
console.log(result2);
