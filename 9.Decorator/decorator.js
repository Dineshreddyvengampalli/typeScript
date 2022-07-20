"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
function personDecorator(constructor) {
    console.log(constructor);
    console.log("this is the decorator");
    constructor.prototype.date = new Date();
}
// decorator can access the constructor even before creating obj of the class
// we can inject data to the constructor(to the class) even before creating the object 
var person = /** @class */ (function () {
    function person(personName) {
        this.personName = personName;
        //this.personName = personName
        console.log("this is the constructor in class");
    }
    person.prototype.displayName = function () {
        console.log(this.personName);
    };
    person = __decorate([
        personDecorator // decorator expression
    ], person);
    return person;
}());
var vehicle = /** @class */ (function () {
    function vehicle() {
    }
    vehicle = __decorate([
        personDecorator
    ], vehicle);
    return vehicle;
}());
var personObj = new person("dinesh");
personObj.displayName();
console.log(personObj.date);
var vehicleObj = new vehicle();
console.log(vehicleObj.date);
