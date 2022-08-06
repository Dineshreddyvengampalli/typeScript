let solutions = require('./answers')
let uniqueUsersTest = require('./getUniqueUsers.json')
let testDob = require('./dobCheck.json')
let testUniqueNames = require('./uniqueCompanyNames.json')
// getUniqueUsers.mockImplementation(()=>{
//     return response
// })

test('get all the unique users',()=>{
    let user = uniqueUsersTest
    let response = {data : user}
    let getUniqueUsers = jest.fn((solutions.getUniqueUsers))
    getUniqueUsers.mockImplementation(()=> response)
    let ans = getUniqueUsers()
    expect(ans.data).toEqual(user)
})

test('test date of births',()=>{
    let testFile = testDob
    let response = {data : testFile}
    let checkDob = jest.fn((solutions.getUserBydob))
    checkDob.mockImplementation(()=> response)
    let ans = checkDob()
    expect(ans.data).toEqual(testFile)

})

test('test unique company names',()=>{
    let testFile = testUniqueNames
    let response = {data : testFile}
    let checkDob = jest.fn((solutions.uniqueCompanyNames))
    checkDob.mockImplementation(()=> response)
    let ans = checkDob()
    expect(ans.data).toEqual(testFile)

})
