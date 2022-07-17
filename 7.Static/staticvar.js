// understanding static variables
var stic = /** @class */ (function () {
    function stic() {
    }
    stic.prototype.increment = function () {
        stic.expVar++;
    };
    stic.expVar = 0;
    return stic;
}());
var obj = new stic();
var obj2 = new stic(); // expVar is not created again and acts as global
obj.increment(); // increased by one 
console.log(stic.expVar); // logs '1'
obj2.increment(); // increased by one 
console.log(stic.expVar); // logs 2
