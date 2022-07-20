"use strict";
exports.__esModule = true;
exports.calculator = void 0;
var calculator = /** @class */ (function () {
    function calculator() {
    }
    calculator.prototype.add = function (a) {
        var n = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            n[_i - 1] = arguments[_i];
        }
        var sum = a;
        for (var i = 0; i < (n.length); i++) {
            sum = sum + n[i];
        }
        return sum;
    };
    calculator.prototype.sub = function (a, b) {
        return a - b;
    };
    calculator.prototype.multiply = function (a) {
        var n = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            n[_i - 1] = arguments[_i];
        }
        var res = a;
        for (var i = 0; i < n.length; i++) {
            res = res * n[i];
        }
        return res;
    };
    calculator.prototype.divide = function (a, b) {
        return (a / b);
    };
    return calculator;
}());
exports.calculator = calculator;
var calc = new calculator();
var addRes = calc.add(10, 10, 10);
console.log(addRes);
