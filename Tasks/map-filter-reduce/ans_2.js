// 2.Get all users with date of birth before 1990.


const { count, Console } = require('console');
var jsonData = require('./sample.json');

let result = jsonData.filter((single_profile)=>{
    if((single_profile.profile.dob.slice(0,4))<1990){
        return single_profile
    }
})

console.log('2.all users with date of birth before 1990 : ')
console.log(result)