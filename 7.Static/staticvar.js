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
var obj3 = new stic();
obj3.increment();
console.log(stic.expVar);
// ***************************************************************
var InstanceSample = /** @class */ (function () {
    function InstanceSample() {
        this.instance = 0;
    }
    InstanceSample.prototype.test = function () {
        this.instance++;
    };
    return InstanceSample;
}());
var objSample = new InstanceSample();
var obj2Sample = new InstanceSample(); // expVar is not created again and acts as global
objSample.test(); // increased by one 
console.log(objSample.instance); // logs '1'
obj2Sample.test(); // increased by one 
console.log(obj2Sample.instance);
