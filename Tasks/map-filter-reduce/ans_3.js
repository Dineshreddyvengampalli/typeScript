//3.Get all unique company names from the data.
const { count, Console } = require('console');
var jsonData = require('./sample.json');

let names = jsonData.map((singleProfile)=>{
    return (singleProfile.profile.company)
})
uniqueCompanyNames = names.filter((value, index, self) => {
    return self.indexOf(value) === index
  })

console.log('3.companies with unique company names are : ',uniqueCompanyNames)
