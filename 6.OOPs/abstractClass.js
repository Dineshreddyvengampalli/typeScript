// Implement abstraction in typescript
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// creation of abstract class
var vehicle = /** @class */ (function () {
    function vehicle(name) {
        this.name = name;
    }
    vehicle.prototype.turnLeft = function () {
        console.log("".concat(this.name, " turn left"));
    };
    vehicle.prototype.stop = function () {
        console.log("".concat(this.name, " stop"));
    };
    return vehicle;
}());
var car = /** @class */ (function (_super) {
    __extends(car, _super);
    function car() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // implementation of abstruct method
    car.prototype.start = function () {
        console.log("".concat(this.name, " start"));
    };
    car.prototype.turnRight = function () {
        console.log("".concat(this.name, " turnright"));
    };
    return car;
}(vehicle));
// creation of the object of derieved class
// we cannot create object of the abstruct class
var bmw = new car('bmw');
// call the methods in the derieved class
bmw.start();
bmw.stop();
bmw.turnRight();
bmw.turnLeft();
