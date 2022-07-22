var is_completed = true;
var value = 10;
function demo() {
    var promise = new Promise(function (resolve, reject) {
        if (is_completed) {
            resolve(value);
        }
        else {
            reject('it is false');
        }
    });
    promise.then(function (message) {
        console.log(message + 100);
    });
    promise["catch"](function (message) {
        console.log(message);
        console.log("sorry");
    });
    promise["finally"](function () {
        console.log('this is from finally');
    });
}
demo();
console.log("this is from outside the function");
