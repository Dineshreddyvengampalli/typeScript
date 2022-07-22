var numArray = [1, 2, 3, 4];
var order = function (value) {
    var promise = new Promise(function (resolve, reject) {
        for (var i = 0; i < numArray.length; i++) {
            if (numArray[i] == value) {
                resolve(value);
            }
            else {
                reject(value);
            }
        }
    });
    promise.then(function (message) {
        console.log("the number ".concat(message, " is present in the array"));
    });
    promise["catch"](function (message) {
        console.log("number is absent ");
    });
};
order(4);
console.log("these are executing parallely");
