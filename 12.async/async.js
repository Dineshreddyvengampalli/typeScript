var stocks = {
    Fruits: ["strawberry", "grapes", "banana", "apple"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["chocolate", "peanuts"]
};
var order = (function (fruit, holder, startProduction) {
    setTimeout(function () {
        console.log("flavour selected : ".concat(stocks.Fruits[fruit]));
        console.log("your order is being processed");
        startProduction(holder);
    }, 2000);
});
var startProduction = function (a) {
    setTimeout(function () {
        console.log('cutting the fruits...');
        setTimeout(function () {
            console.log('adding ice and water');
            setTimeout(function () {
                console.log('starting machine ');
                setTimeout(function () {
                    console.log("holder selected : ".concat(stocks.holder[a]));
                    setTimeout(function () {
                        console.log("selecting topings...");
                        setTimeout(function () {
                            console.log("Its ready .. take ur icecream..");
                        }, 2000);
                    }, 3000);
                }, 2000);
            }, 1000);
        }, 1000);
    }, 2000);
};
order(2, 2, startProduction);
