let solutions = require('./answers')
let fun1Ans = require('./data')

test('users with dob less than 1990',()=>{
    let ans = fun1Ans.fun1Ans
    let mockFun = jest.fn(()=>{
        return {data : ans}
    })
    expect(mockFun()).toEqual(ans)
})
