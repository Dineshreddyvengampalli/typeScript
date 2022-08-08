var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function vehicleDecorator(country) {
    return function (constructor) {
        constructor.prototype.place = country;
    };
}
function ageDecorator(age) {
    return function (constructor) {
        constructor.prototype.age = age;
    };
}
var vehicle = /** @class */ (function () {
    function vehicle(type) {
        this.type = type;
        this.type = type;
    }
    vehicle.prototype.display = function () {
        console.log(this.type);
    };
    vehicle = __decorate([
        vehicleDecorator("India"),
        ageDecorator(10)
    ], vehicle);
    return vehicle;
}());
var person = /** @class */ (function () {
    function person(name) {
        this.name = name;
        this.name = name;
    }
    person = __decorate([
        ageDecorator(23)
    ], person);
    return person;
}());
// creating the instances to the classes
var vehicleObj = new vehicle('suv');
var personObj = new person('dinesh');
console.log(" car location : ".concat(vehicleObj.place));
console.log("vehicle age : ".concat(vehicleObj.age));
console.log("person's age : ".concat(personObj.age));
