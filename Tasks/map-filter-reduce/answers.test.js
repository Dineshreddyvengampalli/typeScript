let solutions = require('./answers')

test('users with dob less than 1990',()=>{
    let solution = solutions.getUserBydob()
    let dob = []
    for(let i of solution){
        dob.push(i.profile.dob.slice(0,3))
    }
    for(let i of dob){
        expect(i).toBeLessThan(1990)
    }
})
