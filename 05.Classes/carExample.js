var car = /** @class */ (function () {
    function car(owner_name, car_brand, car_price) {
        this.owner = owner_name;
        this.brand = car_brand;
        this.price = car_price;
    }
    car.prototype.displayDetails = function () {
        console.log("welcome ".concat(this.owner, ",u've brought ").concat(this.brand, " of price of ").concat(this.price));
    };
    return car;
}());
var sample = new car("dinesh", "audi", 50000000);
sample.displayDetails();
