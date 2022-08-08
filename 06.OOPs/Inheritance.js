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
var animal = /** @class */ (function () {
    // public setName(nme:string){
    //     this.name = nme;
    // }
    function animal(numOfLegs, weight, colour, nme) {
        this.numOfLegs = numOfLegs;
        this.weight = weight;
        this.colour = colour;
        this.name = nme;
    }
    animal.prototype.walk = function () {
        console.log("Iam ".concat(this.name, " and iam walking stright"));
    };
    return animal;
}());
var dog = /** @class */ (function (_super) {
    __extends(dog, _super);
    function dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return dog;
}(animal));
var cat = /** @class */ (function (_super) {
    __extends(cat, _super);
    function cat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return cat;
}(dog));
var dogobj = new dog(4, 30, 'black', 'snoopy');
dogobj.walk();
var catobj = new cat(4, 10, 'white', 'huddle');
catobj.walk();
