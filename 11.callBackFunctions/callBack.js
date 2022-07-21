// callback implementation using arrow functions
var normalFunction = function (callback) {
    console.log("this is normal function");
    callback();
};
var callbackFunction = function () {
    console.log("this is a callback function");
};
normalFunction(callbackFunction);
// callback implementation using function keyword
function a(b) {
    console.log('inside function a ');
    b();
}
function c() {
    console.log('inside callback function');
}
a(c);
// callback function with parameters
function sampleFunction(callBack, param1, param2) {
    console.log("inside a sample function");
    callBack(param1, param2);
}
function sub(a, b) {
    console.log("result from sub : ".concat(a - b));
}
sampleFunction(sub, 5, 3);
