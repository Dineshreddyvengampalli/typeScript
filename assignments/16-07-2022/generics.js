function add(var1) {
    var varx = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        varx[_i - 1] = arguments[_i];
    }
    var sum = 0;
    for (var i = 0; i < varx.length; i++) {
        sum = sum + varx[i];
        sum = sum + var1;
    }
    console.log(sum);
}
add(1, 2, 3, 4, 5);
add(12, 1);
