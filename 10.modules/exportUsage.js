"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
var mainModule_1 = require("./mainModule");
var calculatorObj = new mainModule_1.calculator();
function findMean(a) {
    var n = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        n[_i - 1] = arguments[_i];
    }
    var sum = calculatorObj.add.apply(calculatorObj, __spreadArray([a], n, false));
    var denominator = (n.length) + 1;
    var mean = sum / denominator;
    return mean;
}
function standardDeviation(numList) {
    var n = numList.length;
    var sum = 0;
    for (var i = 0; i < n; i++) {
        sum = sum + numList[i];
    }
    var mean = sum / n;
    var numerator = 0;
    for (var i = 0; i < n; i++) {
        numerator = numerator + Math.pow((numList[i] - mean), 2);
    }
    var standardDeviation = Math.sqrt(numerator / n);
    return standardDeviation;
}
var mean = findMean(4, 4, 4, 4);
console.log("mean : ".concat(mean));
var ans = standardDeviation([1, 2, 3, 4]);
console.log("standard deviation : ".concat(ans));
