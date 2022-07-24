var array = [2, 3, 7, 9, 10];
var result = array.filter(function (value) {
    if ((value % 2) == 0) {
        return value;
    }
});
console.log(result);
var result2 = array.filter(function (value) {
    if (((value) % 2) != 0) {
        return value;
    }
});
console.log(result2);
var result3 = array.filter(function (value) {
    for (var i = 2; i < value; i++) {
        if ((value % i) == 0) {
            break;
        }
        return value;
    }
});
console.log(result3);
