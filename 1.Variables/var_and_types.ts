/*
 GOAL : To understang the concept of variable decleration and 'types'
 that are present in typescript.
*/
export {}
// Variables can be declared using var or const
var num :number; //type of num is number that is predefined to eliminate runtime errors.
num = 70;
const constant_num = 5.5;
// const are not able to modify
var result : number = num+constant_num;
console.log(result);
// string type:
var str :string;
str = "dinesh";
console.log(str);
// boolean type
var bool: boolean;
bool = true;
// number array
var num_array:number[];
num_array = [1,2,3,4,5];
console.log(num_array);
// tuple : enables to store different datatypes
var tuple_type :[number,string]; // should be in same order wen declearing the values.
tuple_type = [40,'college'];
console.log(tuple_type);
// enum type
enum enum_type{A,b,c}
var exp:enum_type = enum_type.b;
console.log(exp);
// any type : it can be dynamically changed
var any_type :any;
any_type = "iam string";
// any_type = 2;
console.log(any_type);
// union of types :
var multi_type :number | string;
multi_type = 20;
multi_type  = "iam acting as multi_type";
console.log(multi_type);
