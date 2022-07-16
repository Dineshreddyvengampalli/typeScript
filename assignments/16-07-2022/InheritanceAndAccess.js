//0. FInd all other operators which perform overloading operations
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
// 1. Create a class called 'fan', assume your own data members, methods atleast 6 each and two private data members.
var fan = /** @class */ (function () {
    // create a constructor : 
    function fan(brand, numberOfWings, speedLevels, lifeSpan, numOfCapacitors, coilUsed) {
        this.brand = brand;
        this.numberOfWings = numberOfWings;
        this.speedLevels = speedLevels;
        this.brand;
        lifeSpan = lifeSpan;
        this.numOfCapacitors = numOfCapacitors;
    }
    fan.prototype.startFan = function (electricity) {
        if (electricity) {
            console.log("fan runs");
        }
        else {
            console.log("doesn't run");
        }
    };
    fan.prototype.changeLevel = function (currentLevel) {
        currentLevel = currentLevel + 1;
        return currentLevel;
    };
    fan.prototype.fanQualityCheck = function () {
        if (this.lifeSpan > 2) {
            console.log("good quality");
        }
        else {
            console.log("average quality");
        }
    };
    return fan;
}());
// 2. Create a child class 'tableFan' from above 'fan'
var tableFan = /** @class */ (function (_super) {
    __extends(tableFan, _super);
    function tableFan() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    tableFan.prototype.changeLevel = function (currentLevel) {
        currentLevel = currentLevel + 2;
        return currentLevel;
    };
    return tableFan;
}(fan));
// 3. Create a child class 'ceilingFan' from 'fan'
var ceilingFan = /** @class */ (function (_super) {
    __extends(ceilingFan, _super);
    function ceilingFan() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ceilingFan;
}(fan));
// 4. Try to access private members from 'fan' in 'ceilingFan'. Is this allowed?
var fanObject = new fan('usha', 3, 3, 1, 2, 'copper');
console.log(fanObject.brand);
var level = fanObject.changeLevel(3);
console.log(level);
fanObject.fanQualityCheck();
var tableFanObj = new tableFan('havells', 4, 4, 3, 4, 'copper');
var levOftable = tableFanObj.changeLevel(4);
console.log(levOftable);
// ceilingFanObj.fanStart(true) : not possible to access the private methods and variables from the parent class
