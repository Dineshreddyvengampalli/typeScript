"use strict";
exports.__esModule = true;
// Variables can be declared using var or const
var num; //type of num is number that is predefined to eliminate runtime errors.
num = 70;
var constant_num = 5.5;
// const are not able to modify
var result = num + constant_num;
console.log(result);
// string type:
var str;
str = "dinesh";
console.log(str);
// boolean type
var bool;
bool = true;
// number array
var num_array;
num_array = [1, 2, 3, 4, 5];
console.log(num_array);
// tuple : enables to store different datatypes
var tuple_type; // should be in same order wen declearing the values.
tuple_type = [40, 'college'];
console.log(tuple_type);
// enum type
var enum_type;
(function (enum_type) {
    enum_type[enum_type["A"] = 0] = "A";
    enum_type[enum_type["b"] = 1] = "b";
    enum_type[enum_type["c"] = 2] = "c";
})(enum_type || (enum_type = {}));
var exp = enum_type.b;
console.log(exp);
// any type : it can be dynamically changed
var any_type;
any_type = "iam string";
// any_type = 2;
console.log(any_type);
// union of types :
var multi_type;
multi_type = 20;
multi_type = "iam acting as multi_type";
console.log(multi_type);
