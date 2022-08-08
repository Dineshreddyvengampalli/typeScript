const { parseTwoDigitYear } = require("moment")
let moment = require("moment")
let data = require('./sample.json')


// Get all users who born in below years
// 1989
// 1992


// Get all users who born in below months
// December
// January


// Get all users who born in below Day & Month
// Krishna Janmastami (19th August)

let dobIn1989 = data.filter((value)=>{
    return moment(value.profile.dob).year() == 1989

})

let dobIn1992 = data.filter((value)=>{
    return (moment(value.profile.dob).year() == 1992)

})

let dobInJan = data.filter((value,index)=>{
    return (moment(value.profile.dob).month() == 00)
})

let dobInDec = data.filter((value,index)=>{
    return (moment(value.profile.dob).month() == 11)
})

let krishnaBirth = data.filter((value,index)=>{
    return (moment(value.profile.dob).date() == 19 && moment(value.profile.dob).month()==07)
})

console.log(krishnaBirth)
